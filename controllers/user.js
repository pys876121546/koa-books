/**
 * 用户部分路由
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */

var User = require('../db/User');

/**
 * 注册
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var fn_regin = async (ctx,next)=>{
    var data  = ctx.request.body;
    var users = await User.findAll({
        where: {
            username: data.username
        }
    });

    if(users.length <= 0) {
        var now = Date.now();
        var random = Math.round(Math.random() * 100)
        now = (now + '' + random) * 1
        User.create({
            id: now,
            pid: now,
            username: data.username,
            password: data.password,
            name: data.name,
            city: data.city,
            birthday: data.birthday
        }).then(function (p) {
            ctx.body = {
                status: 0,
                msg: '注册成功'
            }
        }).catch(function (err) {
            ctx.body = {
                status: 1,
                msg: '注册失败，请联系管理员'
            }
        });
    }else{
        ctx.body={
            status:1,
            msg:'用户名已存在'
        }
    }
}
/**
 * 登录
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var fn_signin = async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin','*')
    var data  = ctx.request.body;
    var users = await User.findAll({
        where: {
            username: data.username
        }
    });

    if(users.length == 1){
        for (let u of users) {
            if(u.password == data.password){
                ctx.body={
                    status:0,
                    msg:'登录成功'
                }
            }else{
                ctx.body={
                    status:1,
                    msg:'密码错误'
                }
            }
        }
    }else{
        ctx.body={
            status:1,
            msg:'未找到用户'
        }
    }
}

module.exports = {
    '/signin':{
        'method':'POST',
        func:fn_signin
    },
    '/regin':{
        'method':'POST',
        func:fn_regin
    }
}