/**
 * 用户部分路由
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */

const User = require('../model/User');
const Sms = require('../config/sms');
/**
 * 注册
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */

var fn_regin = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.response.type = 'application/json'
    var data = ctx.request.body;
    var user = new User(data)
    var users = await user.findname();

    if (users.length <= 0) {
        var result = await user.add();
        if (result == 0) {
            var users = await user.findname();
            for (let u of users) {
                ctx.body = {
                    status: 0,
                    msg: '注册成功',
                    sessionId: u.pid
                }
            }
        } else {
            ctx.body = {
                status: 1,
                msg: '注册失败，请联系管理员或稍后重试'
            }
        }
    } else {
        ctx.body = {
            status: 1,
            msg: '用户名已存在'
        }
    }
}
/**
 * 登录
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var fn_signin = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.response.type = 'application/json';
    var data = ctx.request.body;
    var user = new User(data)
    var users = await user.findname();

    if (users.length == 1) {
        for (let u of users) {
            if (u.password == data.password) {
                ctx.body = {
                    status: 0,
                    msg: '登录成功',
                    sessionId: u.pid
                }
            } else {
                ctx.body = {
                    status: 1,
                    msg: '密码错误'
                }
            }
        }
    } else {
        ctx.body = {
            status: 2,
            msg: '未找到用户'
        }
    }
}
/**
 * 获取用户信息
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var get_user_info = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.response.type = 'application/json';
    var data = ctx.request.query;
    if (JSON.stringify(data) === '{}') {
        ctx.body = {
            status: 2,
            msg: '未登录状态'
        }
    } else {
        var user = new User(data)
        var users = await user.find();
        if (users.length == 1) {
            for (let u of users) {
                ctx.body = {
                    status: 0,
                    msg: '查询成功',
                    data: u
                }
            }
        } else {
            ctx.body = {
                status: 1,
                msg: '未找到用户'
            }
        }
    }
}

/**
 * 更改用户信息
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var up_user_info = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.response.type = 'application/json';
    var data = ctx.request.body;
    var user = new User(data)
    var result = await user.update();

    if (result == 0) {

        ctx.body = {
            status: 0,
            msg: '更改成功',
        }


    } else {
        ctx.body = {
            status: 1,
            msg: '未找到用户'
        }
    }
}
/**
 * 发送验证码
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
var send_sms = async (ctx, next) => {
    var sms_code = Math.round(Math.random() * 1000000)
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.response.type = 'application/json';
    var data = ctx.request.query;
    var params = {
        "SignName": "睿读网站",
        "TemplateCode": "SMS_163056560",
        "TemplateParam": "{\"code\":" + sms_code + "}",
        "PhoneNumbers": data.newphone
    }
    var sms = new Sms(params);
    try {
        var result = await sms.sendsms();
        if (result.Code == 'OK') {
            ctx.body = {
                status: 0,
                code: sms_code,
                msg: '发送成功'
            }
        } else {
            ctx.body = {
                status: 1,
                code: sms_code,
                msg: '发送失败，请联系管理员'
            }
        }
    } catch (e) {
        ctx.body = {
            status: 1,
            code: sms_code,
            msg: '发送失败，请联系管理员'
        }
    }

}

module.exports = {
    '/signin': {
        'method': 'POST',
        func: fn_signin
    },
    '/regin': {
        'method': 'POST',
        func: fn_regin
    },
    '/upuserinfo': {
        'method': 'POST',
        func: up_user_info
    },

    '/getuserinfo': {
        'method': 'GET',
        func: get_user_info
    },

    '/sendsms': {
        'method': 'GET',
        func: send_sms
    },

}