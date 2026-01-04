export async function onRequest({ request, params, env }) {
  return new Response(JSON.stringify({
    "status": true,
    "msg": "服务运行正常",
    "ext": {
      "client-ip": 'xxx',
      "server-ip": 'xxx2',
      "time": Date.now()
    }
  }), {
    status: 200,
    headers: new Headers({
      'my-header-x': 'hello world',
      'Access-Control-Allow-Origin': 'sim.com',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    })
  });
}

// export async function onRequest({ request, params, env }) {
//   const headersObj = Object.fromEntries(request.headers);
//   return new Response(JSON.stringify(headersObj));
//   // return await fetch('http://scf.pages-cloud.qcdntest.cn/stream-chat');
// }
