import React, { Component } from 'react';
import '../../antd.less';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import {
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;
export default class ItOpeLeftNave extends Component {
    static displayName = Layout.name;


    render() {
        return (
            <Layout  >

                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to="/" >主页</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <Link to="/itoperations/add">增加知识库</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined />}>
                        <Link to="/itoperations/query">知识库列表</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="5"></Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </Menu>
            </Layout>
        );
    }
}


