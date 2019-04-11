const Core = require('@alicloud/pop-core');

var client = new Core({
    accessKeyId: 'LTAIYg12KcpJKUVy',
    accessKeySecret: '9ddFdDpqHo0rtWsYoB9Tl5xGGnYxPR',
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25'
});

// var params = {
//     "SignName": "睿读网站",
//     "TemplateCode": "SMS_163056560",
//     "TemplateParam": "{\"code\":\"1111\"}",
//     "PhoneNumbers": "13240471244"
// }

var requestOption = {
    method: 'POST'
};
class sms {
    constructor(params){
        this.params = params
    }
    async sendsms() {
       var result= await client.request('SendSms', this.params, requestOption);
        return result
    }
}
module.exports = sms;