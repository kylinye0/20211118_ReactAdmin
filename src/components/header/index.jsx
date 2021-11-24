import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import { HomeFilled } from '@ant-design/icons';

const { Header } = Layout;
export default class Index extends Component {
    static displayName = Index.name;

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
        this.props.parent.getNavMenuKey(this, e.key);
    }

    render () {
        return (
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} onClick={this.handleMenu}>

                    <Menu.Item key="1" ><Link to='/'><HomeFilled /></Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/itoperation">IT知识库</Link></Menu.Item>
                    <Menu.Item key="3" ><Link to="/fetch-data">FetchData</Link></Menu.Item>

                </Menu>
            </Header>

        );
    }
}
