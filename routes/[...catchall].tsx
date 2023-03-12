import { Handlers } from "$fresh/server.ts";
export const handler: Handlers = {
  GET(req) {
    const url = new URL(req.url);
    url.host = "www.cljoias.com.br";
    url.port = ''

    return Response.redirect(url, 301);
  },
};
