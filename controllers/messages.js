/**
 * 消息部分路由
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var Message = require('../model/Message');

/**
 * 消息查询
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var message_list = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.response.type = 'application/json';
    var data = ctx.request.query;
    var mes = new Message(data)
    var messages = await mes.find()
    ctx.body = {
        status: 0,
        msg: '查询成功',
        data: messages
    }
}

/**
 * 消息删除
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var del_message = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.response.type = 'application/json';
    var data = ctx.request.body;
    var mes = new Message(data)
    var result = await mes.delete()
    if (result == 0) {
        var messages = await mes.find()
        ctx.body = {
            status: 0,
            msg: '删除成功',
            data: messages,
        }
    }

}
module.exports = {
    '/message_del': {
        'method': 'POST',
        func: del_message
    },
    '/message_list': {
        'method': 'GET',
        func: message_list
    }
}
