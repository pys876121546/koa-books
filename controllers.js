const fs = require('fs');

function addMapping( router,mapping ){
    for(var url in mapping){
        var path = mapping[url]
        if(path.method == 'GET'){
            router.get(url,path.func);
            console.log(`register URL mapping: GET ${url}`);
        }
        else if(path.method == 'POST'){
            router.post(url,path.func);
            console.log(`register URL mapping: POST ${url}`);
        }else{
            console.log(`invalid URL: ${url}`);
        }
    }
}
function addControllers(router,dir) {
    var files = fs.readdirSync(__dirname+'/controllers');

    var js_files = files.filter((f)=>{
        return f.endsWith('.js');
    })
    for(var f of js_files){
        console.log(`process controller: ${f}...`);
        let mapping  = require(__dirname + '/' + dir + '/' + f);
        addMapping(router,mapping);
    }
}
module.exports=function (dir) {
    let controllers_dir = dir||'controllers';
    router = require('koa-router')();
    addControllers(router,controllers_dir);
    return router.routes();
}