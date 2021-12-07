import React,{Component} from 'react';
import './index.less';
//import {Breadcrumb} from "antd";
//@author yekai 724456525@qq.com
export default class Mainheadernav extends Component{
    render() {
        return (
            <div className="header">
                <div className="header-top">
                {/*    <Breadcrumb style={{ margin: '8px 0' }}>
                        <Breadcrumb.Item>React</Breadcrumb.Item>
                        <Breadcrumb.Item></Breadcrumb.Item>

                    </Breadcrumb>*/}
                    <span>欢迎，admin</span>
                    <a href="javascripts:">退出</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">首页</div>
                    <div className="header-bottom-right">
                        <span>2021-12-06</span>
                        {/*<iframe width="430" scrolling="no" height="25" frameBorder="0" allowTransparency="true"*/}
                        {/*        src="https://i.tianqi.com?c=code&id=1&icon=1&site=12" title="weather"></iframe>*/}
                       {/* <iframe width="400" height="100" frameBorder="0" scrolling="no" hspace="0"
                                src="https://i.tianqi.com/?c=code&a=getcode&id=35&site=34&icon=1" title="tianqi"></iframe>*/}
                        <span>晴</span>
                    </div>
                </div>
        </div>);
    }
}
