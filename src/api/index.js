/**能更具接口文档定义接口请求*/
import ajax from './ajax';
/*export function reqLogin() {
    return ajax('/login',{username,password},'POST');
}

export function reqAddUser() {

}*/
const BASE="/api";
export const reqLogin=(username,password)=>ajax(BASE+'/login',{"username":username,"password":password},'POST');
export const reqAddUser = (user)=>ajax(BASE+'/manage/user/add',user,'POST');
//export const reqQueryItope = (user)=>ajax(BASE+'/manage/user/add',user,'POST');
