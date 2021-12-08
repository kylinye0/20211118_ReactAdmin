/**能更具接口文档定义接口请求*/
import jsonp from 'jsonp';
import crypto from 'crypto';
import ajax from './ajax';
import urlencode from 'urlencode';
/*export function reqLogin() {
    return ajax('/login',{username,password},'POST');
}

export function reqAddUser() {

}*/
const BASE="/api";
export const reqLogin=(username,password)=>ajax(BASE+'/login',{"username":username,"password":password},'POST');
export const reqAddUser = (user)=>ajax(BASE+'/manage/user/add',user,'POST');
export const reqItoperation =(id)=>ajax(BASE+'/ItOperations',{"id":id},'GET');
export const reqAddItope = (itoperation)=>ajax(BASE+'/ItOperations',itoperation,'POST');
export const reqRemoveItope = (id)=>ajax(BASE+'/ItOperations/'+id,{"id":id},'DELETE');

export  const reqWeather=(location)=>{
    var querystring = require('querystring');
    var ENDPOINT='http://api.seniverse.com/v3/weather/now.json';
   // var str="ts=1443079775&ttl=300&uid=PLNmAelOgsBIiIH-u";
    var str ="location=%E5%8F%B0%E5%B7%9E&language=zh-Hans&unit=c&ts=1443079775&ttl=300&uid=PLNmAelOgsBIiIH-u";
    var sha = crypto.createHmac("sha1",'S4jAeOgEk4Y3PuWWE');
    var base = sha.update(str).digest('base64');
    //base ="Mjk4OTY0NGI5ZDg5ZjIzOWE2YmUzODY1MzkxMDgyZWI0ZWE1MWZmZQ==";
   var urlencode1 = urlencode(base) ;
   // console.log('hmac '+sha.digest());
    console.log('base '+base);
    console.log('urlenc '+urlencode1);
    var obj ={

        location:location,
        language:'zh-Hans',
        unit:'c',
        ts:'1443079775',
        ttl:'300',
        uid:'PLNmAelOgsBIiIH-u',
        sig:urlencode1,
    };
    var q = querystring.encode(obj);
 //  const url = 'https://api.map.baidu.com/weather/v1/?district_id='+location+'&data_type=all&ak=2qXSvTfUwm2LWeQ4SRQ8E0XRZysvqWvA';
   // const url = 'http://api.seniverse.com/v3/weather/now.json?key=S4jAeOgEk4Y3PuWWE&location='+location+'&language=zh-Hans&unit=c&sig='+urlencode1;
    const url = 'https://api.seniverse.com/v3/weather/now.json?location='+location+'&language=zh-Hans&unit=c&uid=PLNmAelOgsBIiIH-u&sig='+urlencode1;
    // 提供jsonp服务的url地址;
    //var url = "http://api.map.baidu.com/place/v2/search?query=ATM机&tag=银行&region=北京&output=json&ak=F552bedbee2ec8fa6bae7b7a08201&callback=callback";

    // // 创建script标签，设置其属性;
    // var script = document.createElement("script");
    // script.setAttribute("src", url);
    // document.getElementsByTagName("head")[0].appendChild(script);
    //
    // // 得到查询结果后的回调函数;
    // var callback = function (data) {
    //     var json = JSON.stringify(data.results[0]);
    //     console.log(json);
    // };
    //
    //ENDPOINT+'?'+q

    jsonp(url,{},(err,data)=>{
        console.log('json()',url);
        if(!err&&data.status===0)
        {
         const {text,code}=  data.results[0].now[0];
        }
        else
        {
            console.log('shibai'+err);
        }
    })
};

reqWeather('台州');
/*json请求的接口请求函数*/
