/*发送异步请求模块
封装axios*/
import axios from 'axios';
import {message} from "antd";

export default function ajax(url,data={},method="GET") {
    return new Promise((resolve,reject)=>{
        let promise;
        if(method==="GET"){
            promise= axios.get(url,{
                params: data
            })
        } else {
            promise=  axios.post(url,data  );
        }
        promise.then(response=>{
            resolve(response.data);
        }).catch(error=>{
           // reject("请求出错了："+error);
            message.error("请求出错了:"+error);
        })
    })

}
//
//ajax("/login",{username:'Tom',password:'123456'},'post').then()
/*var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({

});
var config = {
    method: 'post',
    url: 'http://localhost:5000/api/users',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });*/
