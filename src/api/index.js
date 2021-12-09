/**能更具接口文档定义接口请求*/
import jsonp from 'jsonp';
import crypto from 'crypto';
import ajax from './ajax';
import {message} from 'antd';
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
    return new Promise((resolve,reject)=>{

        var querystring = require('querystring');
        var ENDPOINT='https://api.seniverse.com/v3/weather/now.json';
        var ts = new Date().getTime();
        var str ="ts="+ts+"&ttl=300&uid=PLNmAelOgsBIiIH-u";
        var sha = crypto.createHmac("sha1",'S4jAeOgEk4Y3PuWWE');
        var base = sha.update(str).digest('base64');
        var obj ={
            location:location,
            language:'zh-Hans',
            unit:'c',
            ts:ts,
            ttl:'300',
            uid:'PLNmAelOgsBIiIH-u',
            sig:base,
        };
        var q = querystring.encode(obj);
        //  const url = 'https://api.map.baidu.com/weather/v1/?district_id='+location+'&data_type=all&ak=2qXSvTfUwm2LWeQ4SRQ8E0XRZysvqWvA';
        // const url = 'http://api.seniverse.com/v3/weather/now.json?key=S4jAeOgEk4Y3PuWWE&location='+location+'&language=zh-Hans&unit=c&sig='+urlencode1;

        // 提供jsonp服务的url地址;
        //var url = "http://api.map.baidu.com/place/v2/search?query=ATM机&tag=银行&region=北京&output=json&ak=F552bedbee2ec8fa6bae7b7a08201&callback=callback";


        //
        //ENDPOINT+'?'+q
//{"results":[{"location":{"id":"WTN74CS48NB0","name":"台州","country":"CN","path":"台州,台州,浙江,中国","timezone":"Asia/Shanghai","timezone_offset":"+08:00"},
// "now":{"text":"晴","code":"0","temperature":"14"},"last_update":"2021-12-09T08:39:57+08:00"}]}
        jsonp(ENDPOINT+'?'+q,{},(err,data)=>{
            // console.log(data.results[0].now&&!err);
            if(!err)
            {
                const {text,code}=  data.results[0].now;
                //console.log(text+code);
                resolve({text,code})
            }
            else
            {
                message.error("获取天气失败");
                //console.log('读取天气失败'+err);
            }
        })
    }
    )};


/*export  const reqBaiduWeather=(location)=>{
    var querystring = require('querystring');
    var ak1="2qXSvTfUwm2LWeQ4SRQ8E0XRZysvqWvA";
    var ENDPOINT='https://api.map.baidu.com/weather/v1/';
    var obj ={
        district_id:location,
        data_type:"all",
        ak:ak1
    };
    var q = querystring.encode(obj);
    jsonp(ENDPOINT+'?'+q,{},(err,data)=>{
        console.log(<sript>{data}</sript>);
        if(!err)
        {
            const {text,code}=  data.results[0].now;
            console.log(text+code);
        }
        else
        {
            console.log('读取天气失败'+err);
        }
    })

};*/
 // reqBaiduWeather('331023');


//reqWeather('台州');
/*json请求的接口请求函数*/
