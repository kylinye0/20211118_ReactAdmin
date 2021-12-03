import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import './index.less';
import menuList from '../../config/menuConfig';
const { SubMenu } = Menu;
export default class Header extends Component {
    static displayName = Header.name;
    getMenuNodes_map=(menuList)=>{
        return menuList.map(item=>{
            // {
            //     title:'首页',
            //         key:'/home',
            //     icon:'home',
             //       children:[]
            // }
            if(!item.children)
            {
                return(
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key} >
                            <span>{item.title}</span></Link>
                    </Menu.Item>
                );
            }
            else
            {
                return(
                    <SubMenu key={item.key} title={
                        <span>
                        <span>{item.title}</span></span>
                    }>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                );
            }
        });
    }
    getMenuNodes=(menuList)=>{
        return menuList.reduce((pre,item)=>{
            if(!item.children)
            {
                pre.push(
                    ( <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key} >
                            <span>{item.title}</span></Link>
                    </Menu.Item>)
                );
            }else {
                pre.push((
                    <SubMenu key={item.key} title={
                        <span>
                        <span>{item.title}</span></span>
                    }>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                ));
            }
            return pre;
        },[])
    }
    render() {

        return (
            <Layout  >

                <Menu
                    defaultSelectedKeys={['/home']}
                    defaultOpenKeys={['/itoperations']}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.getMenuNodes_map(menuList)
                    }
                </Menu>
            </Layout>
        );
    }
}


