import React,{Component} from 'react';
import {Card, Table, Button, message} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {reqAddQuestionType, reqRemoveQuestionType} from "../../api/index";

//@author yekai 724456525@qq.com
export default class Questiontype extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            questiontypes:[],
            loading: true,
    }
    }
    async populateQuestionTypeData()
    {
        const questionType=await reqAddQuestionType();
        this.setState({questiontypes:questionType,loading:false});
    }
    renderquestiontypesTable(questiontypes){
        const dataSource =questiontypes ;
       // alert(JSON.parse(dataSource));
       //  const dataSource = [
       //      {
       //          QuestionType: '用友相关',
       //          ID: 1,
       //          Tno: 'aaaaaaaaaaaaaa',
       //      },
       //
       //  ];

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
                title: '类型名称',
                dataIndex: 'TypeName',
                key: 'TypeName',
            },
            {
                title: '操作',
                key:'action',
                render:(record)=>(<span>
                    <Button type="link">修改分类</Button>
                    <Button type="link" onClick={()=>this.handleRemoveQuesType(record.ID)}>删除分类</Button>
                </span>)
            },
        ];
        const title ="问题类型列表";
        const extra = (<Button type="primary"><PlusOutlined />添加</Button>);
        return (<div><Card title={title} extra={extra} >
            <Table
                bordered
                dataSource={dataSource} columns={columns} rowkey="ID"/>
        </Card></div>);
    }
    handleRemoveQuesType=async(id)=> {
        const result = await reqRemoveQuestionType(id);
        if (result.status===0)
        {
            const dataSource = this.state.questiontypes;
            this.setState({ questiontypes: dataSource.filter(item => item.ID!==id)});
            message.success(result.msg);

        }
        else
        {
            message.error(result.msg);
        }

    }
    UNSAFE_componentWillMount(): void {
        this.populateQuestionTypeData();
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderquestiontypesTable(this.state.questiontypes);


        return (
            <div>
                <div>{}</div>
                <h1 id="tabelLabel" >IT知识库列表</h1>
                <p>筛选排序都在标题里</p>
                {contents}
            </div>
        );
    }
}
