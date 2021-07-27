const express = require('express');

//1.创建app服务对象
const app = express();

app.get('/',function (request,response) {
    /*
    * 问题：得是什么样的请求，能交给这个回调函数处理？
    *       1.请求方式必须为GET
    *       2.请求的URI必须为:“/”
    * */
        console.log(request.query);
        console.log(response.url);
    response.send('ok')
})

//一级路由
app.get('/fuxu',function (request,response) {
response.send(`<h1>石富旭搭建的路由一级页面</h1>`)
})

//二级路由
//request:请求对象
//response:响应对象
app.get('/fuxu/hobby',function (request,response) {
    response.send('<h2>石富旭的爱好耳机页面</h2>')
})

//根路由
// app.post('/',function (request,response) {
//     response.send('你发的是post请求')
// })

//3.指定服务器运行的端口号(绑定端口监听)
app.listen(3001,function (err) {
    if (!err) console.log('服务器启动成功了')
    else console.log(err)
})