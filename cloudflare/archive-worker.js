// Wiki-MasterBetter: Cloudflare Worker that stores the auction archive's export chunks in an R2 bucket (binding
// "BUCKET") for Feature AAR's automatic export. Deliberately dumb: it checks a secret token (the "TOKEN" secret)
// and streams bytes in and out of R2. It never parses nor decompresses anything (the free plan allows 10 ms of CPU
// per request): the script gzips each chunk before sending it and gunzips it after downloading it.
//
//   GET  /chunks?cursor=...   -> { names: [{ name, size, uploaded }], cursor: string | null } (up to 1000 per call)
//   PUT  /chunks/{name}       -> stores the request body under chunks/{name}
//   GET  /chunks/{name}       -> the stored bytes
//
// Every request needs "Authorization: Bearer {TOKEN}". Names are limited to letters, digits, "." "_" and "-".

const NAME_REGEX = /^[A-Za-z0-9._-]{1,128}$/;
const PREFIX = "chunks/";

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

async function isAuthorized(request, env) {
  if (!env.TOKEN) return false;
  const given = new TextEncoder().encode(
    request.headers.get("Authorization") ?? "",
  );
  const expected = new TextEncoder().encode(`Bearer ${env.TOKEN}`);
  if (given.byteLength !== expected.byteLength) return false;
  return crypto.subtle.timingSafeEqual(given, expected);
}

export default {
  async fetch(request, env) {
    if (!(await isAuthorized(request, env))) {
      return json({ error: "unauthorized" }, 401);
    }

    const url = new URL(request.url);
    const match = url.pathname.match(/^\/chunks(?:\/([^/]*))?$/);
    if (!match) return json({ error: "not found" }, 404);
    const name = match[1];

    if (name === undefined) {
      if (request.method !== "GET") return json({ error: "method" }, 405);
      const listing = await env.BUCKET.list({
        prefix: PREFIX,
        limit: 1000,
        cursor: url.searchParams.get("cursor") ?? undefined,
      });
      return json({
        names: listing.objects.map((object) => ({
          name: object.key.slice(PREFIX.length),
          size: object.size,
          uploaded: object.uploaded,
        })),
        cursor: listing.truncated ? listing.cursor : null,
      });
    }

    if (!NAME_REGEX.test(name)) return json({ error: "bad name" }, 400);

    if (request.method === "PUT") {
      if (!request.body) return json({ error: "empty body" }, 400);
      await env.BUCKET.put(PREFIX + name, request.body, {
        httpMetadata: { contentType: "application/octet-stream" },
      });
      return json({ ok: true, name }, 201);
    }

    if (request.method === "GET") {
      const object = await env.BUCKET.get(PREFIX + name);
      if (!object) return json({ error: "not found" }, 404);
      return new Response(object.body, {
        headers: { "Content-Type": "application/octet-stream" },
      });
    }

    return json({ error: "method" }, 405);
  },
};
