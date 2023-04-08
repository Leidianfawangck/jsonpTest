const express = require('express')
// const cors = require('cors')
const bodyParser = require('body-parser')

// const whiteList = ['http://127.0.0.1:5500'] // 请求白名单

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(cors({
//     origin: (origin, callback) => {
//         if (whiteList.indexOf(origin) !== -1) return callback(null, true)
//         callback(new Error('Not allowed by CORS'))
//     }
// }))
/**
 * 跨域配置有2种可以通过cors配置域名白名单。也可以通过设置header的Access-Control-Allow-Origin字段配置
 */
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.post('/corsTest', (req, res) => {
    console.log(req.body) // 这里可以获取到客户端传递的数据
    res.send(req.body)
})

// 调用 app.listen 方法，指定端口号并启动web服务器 
app.listen(9999, function () {
    console.log('server is running at http://127.0.0.1:9999')
})

