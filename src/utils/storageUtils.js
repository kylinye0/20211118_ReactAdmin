/*
存储
*/
import store from 'store';
const USER_KEY = "user_key";
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
// eslint-disable-next-line
export default {
    saveUser,
    getUser,
    removeUser
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
