import React, { Component } from 'react';
import { Layout, Breadcrumb, Button } from 'antd';
//import { ItOpeSiderLeftNave } from './itoperations/ItOpeLeftNave';
import Header from '../header';
import LeftNave from '../left-nav';
import ItOpeLeftNave from '../itope-left-nav';
import memoryUtils from '../../utils/memoryUtils';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';

const { Content, Sider } = Layout;
export default class MainLayout extends Component {
    static displayName = MainLayout.name;
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        // this.toggleBreadcrumb = this.toggleBreadcrumb.bind(this);
        this.getNavMenuKey = this.getNavMenuKey.bind(this);
        this.state = {
            collapsed: false,
            key: memoryUtils.leftnavkey
        };
    }



    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    getNavMenuKey(result,navmenukey) {
        this.setState(
            {
                key: navmenukey
            });
    }
    renderLeftNave() {
        var key = this.state.key;
        //alert(key);
        //var key = memoryUtils.key;
        if (key === '1') {
            return (
                <LeftNave></LeftNave>
            );
        } else  if (key === '2') {
                return (
                    <ItOpeLeftNave></ItOpeLeftNave>
                    //<ItOpeSiderLeftNave></ItOpeSiderLeftNave>
                );
            } else {

            }

    }
    render() {
        let LeftNave = this.renderLeftNave();
        return (

            <Layout  >
                <Header parent={this} />
                <Layout >
                    <Sider className="site-layout-background" collapsed={this.state.collapsed} style={{ backgroundColor: "black" }} >

                        <Button type="link" onClick={this.toggleNavbar} style={{ width: '100%', backgroundColor: "black" }} >
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                        </Button>
                        {LeftNave}
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>React</Breadcrumb.Item>
                            <Breadcrumb.Item></Breadcrumb.Item>


                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 880,
                            }}
                        >
                            {this.props.children}

                        </Content>

                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
