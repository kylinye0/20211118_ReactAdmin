/*发送异步请求模块
封装axios*/
import axios from 'axios';

export default function ajax(url,data={},method="GET") {
    if(method==="GET"){
        return axios.get(url,{
            params:{  data }
        })
    }
    else {
        return  axios.post(url,{data}
        );
    }
}
//
//ajax("/login",{username:'Tom',password:'123456'},'post').then()
