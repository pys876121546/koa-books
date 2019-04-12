const Koa = require('koa');
const controller = require('./controllers');
const bodyParser = require('koa-bodyparser');
var cors = require('koa2-cors');
const path = require('path')
const static = require('koa-static')
const koaBody = require('koa-body');



const app = new Koa();

const staticPath = './static';
app.use(static(
    path.join( __dirname,  staticPath)
))

app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 2000*1024*1024	// 设置上传文件大小最大限制，默认2M
    }
}));

app.use(bodyParser());
app.use(cors());
app.use(controller());
app.listen(3000)

console.log('3000服务器已启动');