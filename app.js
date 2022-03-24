const express = require('express')
const compression = require('compression')

// 创建 web 服务器
const app = express()

// 启用中间件, 一定要把这行代码放到 [静态资源托管之前]
app.use(compression())
// 托管静态资源
app.use(express.static('./dist'))

// 启动 web 服务器
app.listen(80, () => {
    console.log('web server running at http://127.0.0.1')
})
