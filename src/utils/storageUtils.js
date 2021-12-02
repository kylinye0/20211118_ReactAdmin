/*
存储
*/
import store from 'store';
const USER_KEY = "user_key";
const LEFTNAV_KEY = "leftnav_key";
const saveUser=(user)=>{
    store.set(USER_KEY,user);

}
const  getUser=(user)=>
{
    //return JSON.parse( localStorage.getItem(USER_KEY||'{}');
    return store.get(USER_KEY)||{};
}
const removeUser=()=>
{
    //localStorage.removeItem(USER_KEY);
    store.remove(USER_KEY);
}

const saveLeftnav=(leftnav)=>{
    store.set(LEFTNAV_KEY,leftnav);

}
const  getLeftnav=()=>
{
    //return JSON.parse( localStorage.getItem(USER_KEY||'{}');
    return store.get(LEFTNAV_KEY)||"";
}
const removeLeftnav=()=>
{
    //localStorage.removeItem(USER_KEY);
    store.remove(LEFTNAV_KEY);
}
// eslint-disable-next-line
export default {
    saveUser,
    getUser,
    removeUser,
    saveLeftnav,
    getLeftnav,
    removeLeftnav
}
/*
export default {
    saveUser(user){
       // localStorage.setItem(USER_KEY,JSON.stringify(user));
        store.set(USER_KEY,user);
    },
    getUser()
    {
        //return JSON.parse( localStorage.getItem(USER_KEY||'{}');
        return store.get(USER_KEY)||{};
    },
    removeUser()
    {
        //localStorage.removeItem(USER_KEY);
        store.remote(USER_KEY);
    }
}
*/
