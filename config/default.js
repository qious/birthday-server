const pkg = require('../package')

module.exports = {
  env: 'development',
  debug: true,

  server: {
    host: '127.0.0.1',
    port: 8000, // 服务端口
    baseUrl: 'http://localhost:8000/' // 对外地址信息
  },

  keys: [
    'im a newer secret',
    'i like turtle'
  ],

  swagger: {
    info: {
      version: pkg.version
    }
  },

  redis: {
    host: 'localhost', // Redis 地址
    port: 6379, // Redis 端口
    keyPrefix: 'birthday:' // Redis 前缀，一般不用修改
  },

  mysql: {
    host: 'localhost', // 数据库地址
    port: 3306, // 数据库端口
    user: 'birthday', // 数据库用户名
    password: 'password', // 数据库密码
    database: 'birthday' // 数据库库名
  },

  wechat: {
    corpId: 'wx4e2c2b771c467c9f', // 微信企业号/企业微信 的 corpId
    secret: 'k7TGD8xJLDU6-sPH3NwY0eTs2oBPyAINMdbSbGN80fuEt01UK0Z8dWzhm7crgkz7',
    agentId: 0, // 应用 ID
    bgImage: 'https://cdn.qiujun.me/image/2018/09/04/06c2d3f70e6fed342e2eb43bce55fb43.png!/both/720x400' // 微信消息图封面
  }
}
