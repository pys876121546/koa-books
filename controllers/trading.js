/**
 * 交易部分路由
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var Trading = require('../model/Trading');
/**
 * 查询交易记录
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var trading_list = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.response.type = 'application/json';
    var data = ctx.request.query;
    var trd = new Trading(data)
    var result = await trd.find()

    ctx.body = {
        status: 0,
        msg: '查询成功',
        data: result
    }

}

module.exports = {
    '/trading_list': {
        'method': 'GET',
        func: trading_list
    },
}