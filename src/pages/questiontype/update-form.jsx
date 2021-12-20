import React,{Component} from 'react';
import {Form,Input} from 'antd';
const Item=Form.Item;
export default class UpdateForm extends Component{
    constructor(props){
        super(props)
    }
    render() {
        const questiontypeName=this.props.questiontypeName;;
        return (<div><Form>
            <Item
                rules={[{initialValue:questiontypeName}]}>
                <Input placeholder="请输入问题类型"></Input>
            </Item>
        </Form></div>);
    }
}