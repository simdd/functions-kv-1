export async function onRequest({ request, params, env }) {
  try {
    request.headers.delete('accept-encoding');
    return await fetch('http://scf.pages-cloud.qcdntest.cn/stream-chat');
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({
        error: "KV storage hasn't been set up for your EdgeOne Pages Project.",
      }),
      {
        headers: {
          'content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
