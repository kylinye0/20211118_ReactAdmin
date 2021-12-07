/**能更具接口文档定义接口请求*/
import jsonp from 'jsonp';
import ajax from './ajax';
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
   // const url = 'https://api.map.baidu.com/weather/v1/?district_id='+id+'&data_type=all&ak=2qXSvTfUwm2LWeQ4SRQ8E0XRZysvqWvA';
    const url = 'https://api.seniverse.com/v3/weather/now.json?key=S4jAeOgEk4Y3PuWWE&location='+location+'&language=zh-Hans&unit=c';
    jsonp(url,{},(err,data)=>{
        console.log('json()',JSON.stringify(data));
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
