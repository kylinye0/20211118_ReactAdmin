import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import './index.less';
import {menuList} from '../../config/menuConfig';
import { createBrowserHistory } from 'history';
let history = createBrowserHistory();
const { SubMenu } = Menu;
export default class Index extends Component {
    static displayName = Index.name;
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
               const cItem = item.children.find(cItem=>cItem.key===history.location.pathname);
               this.openKey =cItem.key;
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
    //在第一次render()之前执行一次，同步
    componentWillMount(): void {
        this.menuNodes = this.getMenuNodes_map(menuList);
    }

    render() {
        const path = history.location.pathname;
      //  const menuNodes = this.getMenuNodes()
       const  openkey =this.openKey();
        return (
            <Layout  >

                <Menu
                    defaultOpenKeys={['/itoperations']}
                    mode="inline"
                    theme="dark"
                    defaultSelectedKeys={[path]}
                    // selectedKeys={[history.location.pathname]}
                >
                    {
                        this.menuNodes()
                        //this.getMenuNodes_map(menuList)
                    }
                </Menu>
            </Layout>
        );
    }
}


