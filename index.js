/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2020-01-29 20:12:38
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-31 15:47:38
 */
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const usersRouter = new Router({prefix:'/users'})

router.get('/', (ctx) => {
  ctx.body = '主页'
})

usersRouter.get("/", ctx => {
  ctx.body = "用户主页"
})

usersRouter.post("/", ctx => {
  ctx.body = "创建用户接口"
})

usersRouter.post("/:id", ctx => {
  ctx.body = `用户ID ${ctx.params.id}`
})

usersRouter.put("/:id", ctx => {
  ctx.body = [{name: '李雷',age: 23},{name: '韩梅梅', age: 12}]
})

usersRouter.delete("/:id", ctx => {
  ctx.status = 204
})

app.use(router.routes())
app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())
app.listen(4000)