import React,{Component} from 'react';
import { Form, Input, Button } from 'antd';
import {UserOutlined,LockOutlined} from '@ant-design/icons'
import './login.less';
import logo from './images/logo.png';
import useForm from "antd/lib/form/hooks/useForm";
export default class Login extends Component{
    render() {
        const onFinish = (values: any) => {
            console.log('Received values of form: ', values);
        };
        const onSubmit=(event)=>{
            alert(event);
        }
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
                    onSubmit={onSubmit}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
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
/*
const WrapLogin =Form.useForm(<Login />);
export default WrapLogin;*/
