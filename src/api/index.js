/**能更具接口文档定义接口请求*/
import ajax from './ajax';

/*export function reqLogin() {
    return ajax('/login',{username,password},'POST');
}

export function reqAddUser() {

}*/
export const reqLogin=(username,password)=>ajax('/login',{username:username,password:password},'POST');
export const reqAddUser = (user)=>ajax('/manage/user/add',user,'POST');
