var fn_index = async (ctx,next) => {
    var now = Date.now();
    console.log(now)
    var random = Math.round(Math.random()*100)
    console.log(random)
    ctx.body=now+''+random
}
module.exports={
    '/':{
        'method':'GET',
        func:fn_index
    }
}