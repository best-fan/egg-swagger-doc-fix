/*
 * @Descripttion:
 * @Author: fanfuda
 * @Date: 2022-08-30 02:45:08
 * @LastEditors: fanfuda
 * @LastEditTime: 2022-08-30 22:51:44
 */
module.exports = (options, app) => {
  return async function (ctx, next) {
    const { baseUrl } = app.config.swaggerdoc;
    if (ctx.request.url === '/swagger-ui.html') {
      ctx.redirect(ctx.request.url + '?baseUrl=' + baseUrl);
    } else {
      await next();
    }
  };
};
