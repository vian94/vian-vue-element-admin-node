const express = require('express')
const router = require('./router')

const app = express()

app.use('/', router)

const server = app.listen('5000', function() {
    const { port } = server.address();
    console.log(`http服务已在${port}端口启动..`);
})