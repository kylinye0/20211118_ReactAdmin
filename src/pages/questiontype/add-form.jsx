import React,{Component} from 'react';
import {Form,Input} from 'antd';
const Item=Form.Item;
export default class AddForm extends Component{
    render() {
        return (<div><Form>
            <Item
                name="questionType"
            rules={[{initialValue:''}]}>
            <Input placeholder="请输入问题类型"></Input>
            </Item>
        </Form></div>);
    }
}