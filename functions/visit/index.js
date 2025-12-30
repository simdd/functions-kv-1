export async function onRequest({ request, params, env }) {
  const headersObj = Object.fromEntries(request.headers);
  return new Response(JSON.stringify(headersObj));
  // return await fetch('http://scf.pages-cloud.qcdntest.cn/stream-chat';
}
