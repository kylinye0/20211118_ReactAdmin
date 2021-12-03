import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import './index.less';
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;
export default class Header extends Component {
    static displayName = Header.name;


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
                        <Link to="/home" >主页</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <Link to="/user">用户管理</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined />}>
                        <Link to="/role">角色管理</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="图表">
                        <Menu.Item key="5"><Link to="/bar">柱状图</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/line">线状图</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/pie">饼状图</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="知识库">
                        <Menu.Item key="9"><Link to="/itoperation">类型管理</Link></Menu.Item>
                        <Menu.Item key="10"><Link to="/itoperation">知识库管理</Link></Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </Layout>
        );
    }
}


