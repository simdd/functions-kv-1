export async function onRequest({ request, params, env }) {
  try {
    return await fetch('http://scf.pages-cloud.qcdntest.cn/stream-chat', {
      method: request.method,
      headers: {
        // 只复制需要的头，不包含 accept-encoding
        // 或者明确设置
        'accept-encoding': 'identity',
        // 复制其他可能需要的头
        ...(request.headers.get('content-type') && {
          'content-type': request.headers.get('content-type')
        })
      },
      // 如果有 body，也需要处理
      body: request.body
    });
  } catch (err) {
    console.error(err);
    return new Response('error', {
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
