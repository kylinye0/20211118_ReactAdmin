import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import '../../antd.less';
import { Input, Select, DatePicker, Button, Form, Upload, Row, Col ,message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import '../../api/index';
import {reqAddItope} from "../../api";
import moment from 'moment';
import storageUtils from "../../utils/storageUtils";
const { TextArea } = Input;


// const formLayout = {
//     labelCol: { span:6},
//     wrapperCol: { span: 20}
// };
// const formItemLayout = {
//     wrapperCol: { span: 14, offset: 4 }
// };
// const buttonItemLayout = {
//     wrapperCol: { span: 14, offset: 4 }
// };


export default class Add extends Component {
     onFinish = async (values) => {
        //console.log("增加知识库条目" +JSON.stringify(values) );
        /*  fetch('api/ITOperations', {
              headers: {
                  'content-type': 'application/json'
              },
              method: 'post',
              //body: values
               body:JSON.stringify(values)
          }).then(response => response.json())
              .catch(error => console.error('Error', error));*/
        //const navigate = useNavigate();
        const result = await reqAddItope(values);
        const history = createBrowserHistory();

        if(result.status===0)
        {
            storageUtils.saveLeftnav("2");
            message.success(result.msg);

            history.replace('/itoperations/query');
            history.go();
        }
        else {
            message.error(result.msg);
        }
    }
    render() {

        return (
            <div>
            <h1>增加知识库条目</h1>
                <Form
                    layout="horizontal"
                    initialValues={{ QuestionType:'用友相关',RegisDate:moment(new Date(),"YYYY/MM/DD")}  }
                    size="default"
                    onFinish={this.onFinish}
            >
                <>
                    
                    <Row>
                        
                        <Col span={12} offset={9}>
                            
                        </Col>
                    </Row>
                        <Row>
                            <Col span={6} offset={4}>
                                <Form.Item label="IT相关" name="QuestionType" >
                                <Select >
                                    <Select.Option value="用友相关">用友相关</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                            <Col span={10} offset={1}>
                                <Form.Item label="IT问题" name="Question" rules={[{ required: true, message: "IT问题必填" }]}>
                                <TextArea rows={3}></TextArea>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                            <Col span={17} offset={4} >
                                <Form.Item label="IT解决方案" name="Solve">
                                <TextArea rows={3} ></TextArea>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                            <Col span={6} offset={4}>
                                <Form.Item label="登记人" name="Registrant">
                                <Select >
                                    <Select.Option value="王雷">王雷</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                            <Col span={10} offset={1}>
                                <Form.Item label="登记时间" name="RegisDate" >
                                <DatePicker locale={locale} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                            <Col span={6} offset={4}>
                                <Form.Item label="上次文件">
                                <Upload >
                                    <Button icon={<UploadOutlined />}>上次文件</Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>
                        <Row>
                            <Col span={ 2} offset={8}>
                                <Button type="primary" htmlType="提交">
                                    提交
                                </Button>
                        </Col>
                        <Col>
                            <Button onClick={()=>{}}
                            >

                            </Button>
                        </Col>
                    </Row>
                </>
                </Form>
            </div>
            );
    }
}

// Example POST method implementation:
/*
postData('http://example.com/answer', { answer: 42 })
    .then(data => console.log(data)) // JSON from `response.json()` call
    .catch(error => console.error(error))

function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(response => response.json()) // parses response to JSON
}*/
