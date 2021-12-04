import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import {itopemenuList, menuList} from '../../config/menuConfig';
import { createBrowserHistory } from 'history';
let history = createBrowserHistory();
const { SubMenu } = Menu;
export default class Index extends Component {
    static displayName = Index.name;
    getMenuNodes_map=(itopemenuList)=>{
        return itopemenuList.map(item=>{
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
                if(cItem)
                {
                    this.openKey =item.key;
                }
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
                const cItem = item.children.find(cItem=>cItem.key===history.location.pathname);
                if(cItem)
                {
                    this.openKey =item.key;
                }
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

    UNSAFE_componentWillMount(): void {
        this.menuNodes = this.getMenuNodes_map(menuList);
    }
    render() {
        const path = history.location.pathname;
        const  openkey =this.openKey;
        return (
            <Layout  >

                <Menu
                    defaultSelectedKeys={[path]}
                    //defaultOpenKeys={['/itoperations']}
                    defaultOpenKeys={[openkey]}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.getMenuNodes(itopemenuList)
                    }
                </Menu>
            </Layout>
        );
    }
}


