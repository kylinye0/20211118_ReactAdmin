import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeFilled ,NotificationOutlined} from '@ant-design/icons';
import storageUtils from "../../utils/storageUtils";
import memoryUtils from "../../utils/memoryUtils";

const { Header } = Layout;
const {SubMenu} =Menu;
export default class Headernav extends Component {
    static displayName = Headernav.name;

    constructor (props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar () {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    handleMenu(e) {
        if(e.key==='9')
        {
            storageUtils.removeUser();
            //memoryUtils.user ={};

        }else {
            this.props.parent.getNavMenuKey(this, e.key);
            storageUtils.saveLeftnav(e.key);

        }
    }

    render () {
        return (
           <Header className="header">
                <div className="logo" />

                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[memoryUtils.leftnavkey]} onClick={this.handleMenu}>

                    <Menu.Item key="1" ><Link to='/home'><HomeFilled /></Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/home">IT知识库</Link></Menu.Item>
                    <Menu.Item key="3" ><Link to="/fetch-data">FetchData</Link></Menu.Item>

                    <SubMenu key="sub1" icon={<NotificationOutlined />} title={memoryUtils.user.UserName} style={{position:'absolute',right:'100px'}}>
                        <Menu.Item key="9"><Link to="/login">退出</Link></Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
           </Header>

        );
    }
}
