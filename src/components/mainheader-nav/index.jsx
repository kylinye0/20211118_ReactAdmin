import React,{Component} from 'react';
import './index.less';
import moment from 'moment';
import memoryUtils from '../../utils/memoryUtils';
import {reqWeather} from "../../api";
//import {Breadcrumb} from "antd";
//@author yekai 724456525@qq.com

export default class Mainheadernav extends Component{
    state={
        currentTime:moment().format("YYYY-MM-DD hh:mm:ss"),
        text:"",
        code:""
    }
    getTime=()=>{
        setInterval(()=>{
            this.setState({currentTime:moment().format("YYYY-MM-DD hh:mm:ss")})
        },1000);
    }
    getWeather=async ()=>{
        const {text,code} = await reqWeather("台州");
       //var imgsrc= require("../../assets/image/weather/"+code+"@1x.png").default;
        this.setState({text:text,code:require("../../assets/image/weather/"+code+"@1x.png").default});
        //this.setState({text:text,code:require(imgsrc).default});
    }
    componentDidMount(): void {
        this.getTime();
        this.getWeather();
       // this.addImage();
    }

    render() {
       // console.log(this.state.currentTime);
        const {currentTime,text,code} = this.state;
        const username =memoryUtils.user.UserName;


        //console.log(code);
        return (
            <div className="header">
                <div className="header-top">
                {/*    <Breadcrumb style={{ margin: '8px 0' }}>
                        <Breadcrumb.Item>React</Breadcrumb.Item>
                        <Breadcrumb.Item></Breadcrumb.Item>

                    </Breadcrumb>*/}
                    <span>欢迎，{username}</span>
                    <a href="javascripts:">退出</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">首页</div>
                    <div className="header-bottom-right">
                        <span>{currentTime} </span>
                        <img src={code} alt="weather" ></img>
                        {/*<iframe width="430" scrolling="no" height="25" frameBorder="0" allowTransparency="true"*/}
                        {/*        src="https://i.tianqi.com?c=code&id=1&icon=1&site=12" title="weather"></iframe>*/}
                       {/* <iframe width="400" height="100" frameBorder="0" scrolling="no" hspace="0"
                                src="https://i.tianqi.com/?c=code&a=getcode&id=35&site=34&icon=1" title="tianqi"></iframe>*/}
                        <span>{text}</span>
                    </div>
                </div>
        </div>);
    }
}

