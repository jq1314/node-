/*原生搭建node服务器*/

////1.引入Node内置的http模块
let http =  require('http');

//引入一个内置模块，用于解析key=value&key=value.....这种形式的字符串为js中的对象
/*
备注：
  1.key=value&key=value.....的编码形式：urlencoded编码形式。
  2.请求地址里携带urlencoded编码形式的参数，叫做：查询字符串参数(query参数)。
* */
//引入的qs是一个对象，该对象身上有着很多有用的方法，最具代表性的：parse()
let qs =  require('querystring')
//2.创造一个“服务员” ---- 创建服务对象
 let server = http.createServer(function (request,response) {
     let params = request.url.split('?')[1] //name=zhangsan&age=18
     //console.log(params)
     let objParams = qs.parse(params) //
     //console.log(objParams)
     let {name,age} =  objParams

     response.setHeader('content-type','text/html;charset=utf-8')
     response.end(`<h1>你好${name},你的年龄是${age}</h1>`)

 })
//3.指定服务器运行的端口号(绑定端口监听)
server.listen(3000,function (err) {
    if (!err) console.log('服务器启动成功');
    else console.log(err)
})