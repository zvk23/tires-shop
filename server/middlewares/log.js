module.exports = (ctx, next) => {
  console.log("ctx.method", ctx.method, "\n");
  next();
};
