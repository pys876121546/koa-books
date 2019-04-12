/**
 * 图书模块
 * @type {module:fs}
 */
const fs = require('fs');
const Book = require('../model/Book');
/**
 * 上传文件
 * @param ctx
 * @param next
 * @returns {Promise<{msg: string, path: string, status: number}>}
 */

/**
 * @getClientIP
 * @desc 获取用户 ip 地址
 * @param {Object} req - 请求
 */
function getClientIP(req) {
    return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
        req.connection.remoteAddress || // 判断 connection 的远程 IP
        req.socket.remoteAddress || // 判断后端的 socket 的 IP
        req.connection.socket.remoteAddress;
};


var fn_uoload = async (ctx, next) => {
    const file = ctx.request.files.file;	// 获取上传文件
    const reader = fs.createReadStream(file.path);	// 创建可读流
    const ext = file.name.split('.').pop();		// 获取上传文件扩展名
    //console.log(ext)
    var url = 'http://'+getClientIP(ctx.request.req)+':3000'
    var upStream, path;
    var filename = Math.random().toString()
    if (ext == 'epub') {
        upStream = fs.createWriteStream(`static/epubs/${filename}.${ext}`);
        path = url+`/epubs/${filename}.${ext}`// 创建可写流
    } else {
        upStream = fs.createWriteStream(`static/images/${filename}.${ext}`);
        path = url+`/images/${filename}.${ext}`// 创建可写流
    }

    reader.pipe(upStream);	// 可读流通过管道写入可写流
    return ctx.body = {
        status: 0,
        msg: '上传成功',
        path: path
    };
}

var add_book = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.response.type = 'application/json'
    var data = ctx.request.body;
    var book = new Book(data, 'title')
    var books = await book.find();

    if (books.length <= 0) {
        var result = await book.add();
        if (result == 0) {

            ctx.body = {
                status: 0,
                msg: '添加成功'
            }
        } else {
            ctx.body = {
                status: 1,
                msg: '添加失败，请联系管理员或稍后重试'
            }
        }
    } else {
        ctx.body = {
            status: 2,
            msg: '图书已存在'
        }
    }
}
/**
 * 获得热门书籍
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var get_hot_book = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.response.type = 'application/json'
    var data = ctx.request.body;
    data.collection = '1'
    var book = new Book(data, 'collection')
    var result = await book.find();
    if (result == 1) {
        ctx.body = {
            status: 1,
            msg: '获取热门书籍失败,请检查网络'
        }
    } else {
        ctx.body = {
            status: 0,
            msg: '查询成功',
            data: result,
        }
    }
}

/**
 * 获得书籍详情
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var get_book = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.response.type = 'application/json'
    var data = ctx.request.query;
    var book = new Book(data, 'id')
    var result = await book.find();
    if (result == 1) {
        ctx.body = {
            status: 1,
            msg: '获取书籍失败,请检查网络'
        }
    } else {
        for (let u of result) {
            ctx.body = {
                status: 0,
                msg: '查询成功',
                data: u
            }
        }
    }
}


module.exports = {
    '/uoloadFile': {
        'method': 'POST',
        func: fn_uoload
    },
    '/add_book': {
        'method': 'POST',
        func: add_book
    },
    '/get_hot_book': {
        'method': 'GET',
        func: get_hot_book
    },
    '/get_book': {
        'method': 'GET',
        func: get_book
    },
}