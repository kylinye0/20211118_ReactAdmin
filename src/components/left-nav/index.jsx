import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import './index.less';
import { menuList} from '../../config/menuConfig';
import { createBrowserHistory } from 'history';
let history = createBrowserHistory();
const { SubMenu } = Menu;
export default class Leftnav extends Component {
    constructor (props) {
        super(props);
        this.handleMenu = this.handleMenu.bind(this);

    }
    static displayName = Leftnav.name;
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
    handleMenu(e) {
            //alert(e.key);
            const path = e.key;
             let title="";
                menuList.forEach(item=>{
                if(item.key===path)
                {
                    title = item.title;
                }
                else if(item.children){
                    const cItem= item.children.find(cItem=>cItem.key===path);
                    if(cItem){
                        title=cItem.title;
                    }
                }
            }

        );
            this.props.parent.getLeftNavMenuKey(this, title);

    }

    //在第一次render()之前执行一次，同步
   /* componentWillMount(): void {

    }*/
    UNSAFE_componentWillMount(): void {
        this.menuNodes = this.getMenuNodes_map(menuList);
    }

    render() {
        const path = history.location.pathname;
      //  const menuNodes = this.getMenuNodes()
       const  openkey =this.openKey;
        //console.log("open"+openkey);
        return (
            <Layout  >

                <Menu
                    defaultOpenKeys={[openkey]}
                    mode="inline"
                    theme="dark"
                    defaultSelectedKeys={[path]}
                    onClick={this.handleMenu}
                    //selectedKeys={[path]}
                    //openKeys={[openkey]}
                >
                    {
                        this.menuNodes
                        //this.getMenuNodes_map(menuList)
                    }
                </Menu>
            </Layout>
        );
    }
}


