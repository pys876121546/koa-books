const Shuffling = require('../model/Shuffling');

var fn_index = async (ctx,next) => {
    var now = Date.now();
    console.log(now)
    var random = Math.round(Math.random()*100)
    console.log(random)
    ctx.body=now+''+random
}

/**
 * 获得轮播
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var get_shuffling = async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.response.type = 'application/json';
    var shuf = new Shuffling()
    var shufs = await shuf.find()
    ctx.body = {
        status: 0,
        msg: '查询成功',
        data: shufs
    }
}

module.exports={
    '/':{
        'method':'GET',
        func:fn_index
    },
    '/get_shuffling':{
        'method':'GET',
        func:get_shuffling
    },

}