export async function onRequest({ request, params, env }) {
  let result = 0;
  // 循环次数取决于机器性能。
  // 在普通服务器上，1000万次浮点运算通常需要 100ms-300ms
  const iterations = 20000000; // 2千万次

  for (let i = 0; i < iterations; i++) {
      // Math.sqrt 和 Math.random 都是相对昂贵的 CPU 指令
      result += Math.sqrt(i) * Math.random();
  }
  
  return new Response(JSON.stringify({
    "status": true,
    "msg": "服务运行正常",
    "ext": {
      "client-ip": 'xxx',
      "server-ip": 'xxx2',
      "cost": result
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
