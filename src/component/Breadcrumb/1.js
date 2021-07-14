router.post("/order", async (ctx, next) => {
  const timeStamp = new Date().getTime();
  if (!mini_token || timeStamp - mini_token.date > 7200 * 1000) {
    await http(
      `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx731a289431019765&secret=22ca458a9719054b5d84c74f3a215336`
    ).then((html) => {
      const res = JSON.parse(html);
      mini_token = { token: res.access_token, date: new Date().getTime() };
    });
  }
  console.log(ctx.request.body)
  const res = await http(
    `https://api.weixin.qq.com/tcb/invokecloudfunction?access_token=${mini_token.token}&env=ifit-vh0i9&name=${ctx.request.body.name}`,
    "POST",
    ctx.request.body
  );
  ctx.body = res;
});