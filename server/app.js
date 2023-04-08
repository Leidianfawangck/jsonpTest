// 导入 express 模块 
const express = require('express')
// 创建 express 的服务器实例 
const app = express()

app.get('/jsonp', (req, res) => {
    console.log(8888,req.query) // 这里可以获取到客户端传递的数据
    const objRes = {
        ...req.query
    }
    res.send(`${req.query?.cbName}(${JSON.stringify(objRes)})`)
    // res.send(objRes)
})

// 调用 app.listen 方法，指定端口号并启动web服务器 
app.listen(8888, function () {
    console.log('server is running at http://127.0.0.1:8888')
})
