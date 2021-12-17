import React,{Component} from 'react';
import { Card,Table,Button } from 'antd';
import {PlusOutlined} from '@ant-design/icons';


//@author yekai 724456525@qq.com
export default class Questiontype extends Component{
    render() {
        const dataSource = [
            {
                QuestionType: '用友相关',
                ID: 1,
                Tno: 'aaaaaaaaaaaaaa',
            },

        ];

        const columns = [
            {
                title: '序号',
                dataIndex: 'ID',
                key: 'ID',
            },
            {
                title: '类型号',
                dataIndex: 'Tno',
                key: 'Tno',
            },
            {
                title: '问题类型',
                dataIndex: 'QuestionType',
                key: 'QuestionType',
            },
            {
                title: '操作',
                key:'action',
                render:()=>(<span>
                    <Button type="link">修改分类</Button>
                    <Button type="link">删除分类</Button>
                </span>)
            },
        ];
        const title ="问题类型列表";
        const extra = (<Button type="primary"><PlusOutlined />添加</Button>);
        return (<div><Card title={title} extra={extra} >
            <Table
                bordered
                dataSource={dataSource} columns={columns} rowkey="ID"/>;
        </Card></div>);
    }
}
