import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import Header from '../header-nav';
import LeftNave from '../left-nav';
import ItOpeLeftNave from '../itope-left-nav';
import memoryUtils from '../../utils/memoryUtils';
import MainHeader from '../mainheader-nav/index';


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
            key: memoryUtils.leftnavkey,
            leftkey:""
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

    getLeftNavMenuKey(result,leftmenukey) {
        //alert(leftmenukey);
        this.setState(
            {
                leftkey: leftmenukey
            });
    }
    renderLeftNave() {
        var key = this.state.key;
        //alert(key);
        //var key = memoryUtils.key;
        if (key === '1') {
            return (
                <LeftNave parent={this}></LeftNave>
            );
        } else  if (key === '2') {
                return (
                    <ItOpeLeftNave parent={this}></ItOpeLeftNave>
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
                    <Layout style={{ padding: '0px 24px 24px' }}>

                        <MainHeader children={this.state.leftkey} ></MainHeader>
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
