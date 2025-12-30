export async function onRequest({ request, params, env }) {
  try {
    // request.headers.delete('accept-encoding');
    return new Response(request.headers.get('accept-encoding'));
    
    // return await fetch('http://scf.pages-cloud.qcdntest.cn/stream-chat');
  } catch (err) {
    console.error(err);
    return new Response('error',
      {
        headers: {
          'content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
