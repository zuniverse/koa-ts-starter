import Router from "koa-router";
const router = new Router();

router.get("/", async ctx => {
  try {
    ctx.body = "Welcome to Koa.";
  } catch (e) {
    console.error(e);
  }
});

export default router;
