const express = require('express')
const compression = require('compression')
const https = require('https');
const fs = require('fs');

// 创建 web 服务器
const app = express()

// 启用中间件, 一定要把这行代码放到 [静态资源托管之前]
app.use(compression())
// 托管静态资源
app.use(express.static('./dist'))

// 启动 web 服务器
// app.listen(80, () => {
//     console.log('web server running at http://127.0.0.1')
// })

// 如果有 SSL 证书
const options = {
    cert: fs.readFileSync('./fill_chain.pem'),
    key:fs.readFileSync('./private.key')
}

https.createServer(options, app).listen(443);
