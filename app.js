const Koa = require('koa');
const controller = require('./controllers');
const bodyParser = require('koa-bodyparser');
var cors = require('koa2-cors');

const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(controller());
app.listen(3000)

console.log('3000服务器已启动');