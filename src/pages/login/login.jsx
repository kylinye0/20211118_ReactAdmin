import React,{Component} from 'react';
import {createBrowserHistory} from 'history';
//import  {browserHistory} from 'react-router';
import { Form, Input, Button ,message} from 'antd';
import {UserOutlined,LockOutlined} from '@ant-design/icons'
import './login.less';
import logo from './images/logo.png';
import {reqLogin,reqAddUser} from '../../api';
import  memoryUtils from '../../utils/memoryUtils';
import  storageUtils from '../../utils/storageUtils';

//let navigate = useNavigate();
/*const navigate=()=>{
    let navigate = useNavigate();
    navigate("/admin",{replace:true} );
}*/

export default class Login extends Component{

    render() {
        const onFinish = async (values: any) => {
            //let navigate = useNavigate();
            const {username,password}=values;
            /*try {*/
                const result = await reqLogin(username,password);
                  // console.log("请求成功了",response.data);
             /* }catch (e) {
                   console.log("请求出错了",e);
               }*/
             if(result.status ===0 )
             {

                message.success('登录成功');
                const user =result.user;
                 memoryUtils.user = user;
                 storageUtils.saveUser(user);
                 //console.log('login'+memoryUtils.user);
                 const history = createBrowserHistory( {forceRefresh: true});
                history.replace('/',user);
                history.go();

                //location.href;
                 //navigate();
             } else{
                 message.error(result.msg);
             }


            //console.log('Received values of form: ', values);
        };

        return (<div className="login">
            <header className="login-header">
                <img src={logo} alt="logo"></img>
                <h1>后台管理系统</h1>
            </header>
            <section className="login-content">
                <h2>用户登录</h2>
                <div><Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                    initialValues={{username:'admin'}}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '用户名必须输入!' },
                            {min:4,message:'最少4个字符!'},
                            {max:12,message:'最多12个字符!'},
                            {pattern:/^[a-zA-Z0-9_]+$/,message:"用户名必须是英文、数字或下划线组成"},
                            {whitespace:true,message:"不能只有空格"}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '密码必须输入!' },
                            {min:4,message:'最少4个字符!'},
                            {max:12,message:'最多12个字符!'},
                        {pattern:/^[a-zA-Z0-9_]+$/,message:"用户名必须是英文、数字或下划线组成"},
                            {whitespace:true,message:"不能只有空格"}]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form></div>
            </section>
        </div>);
    }
}

