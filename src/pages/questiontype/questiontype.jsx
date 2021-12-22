import React,{Component} from 'react';
import {Card, Table,Modal, Button, message} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {reqQuestionType,reqAddQuestionType, reqRemoveQuestionType} from "../../api/index";
import AddForm from './add-form';
import UpdateForm from './update-form';
//import { FormInstance } from 'antd/es/form';
//@author yekai 724456525@qq.com
export default class Questiontype extends Component{
    formRef = React.createRef();

    constructor(props)
    {
        super(props);
        this.state={
            questiontypes:[],
            loading: true,
            visible: false,
            showStatus:0,
    }
    }
    handleAddQuestionType =async ()=>{
        this.setState({
            showStatus: 0,
        });
        //const questionType=this.formRef.current.setFieldsValues


        //const questionType= this.form.getfield;
        //const questionType= this.form.getColumnSearchProps("questionType");
        //alert(questionType);
        const result = await reqAddQuestionType();
        if (result.status===0) {
            message.success(result.msg);
            this.populateQuestionTypeData();
        }else {
            message.success(result.msg);
        }


    }

    handleUpdateQuestionType =()=>{
        this.setState({
            showStatus: 0,
        });
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
    showAdd = () => {
        this.setState({
            showStatus: 1,
        });
    };
    showUpdate= (questiontype) => {
        this.questiontype = questiontype;
        this.setState({
            showStatus: 2,
        });
    };

    handleCancel = () => {
        this.setState({
            showStatus: 0,
        });
    };
    async populateQuestionTypeData()
    {
        const questionType=await reqQuestionType();
        this.setState({questiontypes:questionType,loading:false});
    }



    renderquestiontypesTable(){

       // alert(JSON.parse(dataSource));
       //  const dataSource = [
       //      {
       //          QuestionType: '用友相关',
       //          ID: 1,
       //          Tno: 'aaaaaaaaaaaaaa',
       //      },
       //
       //  ];
        const {datasource,showStatus}=this.state;
        const questiontype=this.questiontype || {};
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
                    <Button type="link" onClick={()=>this.showUpdate(record)}>修改分类</Button>
                    <Button type="link" onClick={()=>this.handleRemoveQuesType(record.ID)}>删除分类</Button>
                </span>)
            },
        ];
        const title ="问题类型列表";
        const extra = (<Button type="primary" onClick={this.showAdd}><PlusOutlined />添加</Button>);
        return (<div><Card title={title} extra={extra} >
            <Table
                bordered
                pagination={{defaultPageSize:5,showQuickJumper:true}}
                dataSource={datasource} columns={columns} rowkey="ID"/>
            <Modal
                title="添加分类"
                visible={showStatus===1}
                onOk={this.handleAddQuestionType}
                onCancel={this.handleCancel}
                okText="确认"
                cancelText="取消"
                destroyOnClose={true}
            >
                <AddForm ref={this.formRef} preserve={false}/>
            </Modal>
            <Modal
                title="更新分类"
                visible={showStatus===2}
                onOk={this.handleUpdateQuestionType}
                onCancel={this.handleCancel}
                okText="确认"
                cancelText="取消"
            >
                <UpdateForm questiontypeName={questiontype.TypeName}></UpdateForm>
            </Modal>

        </Card></div>);
    }

    UNSAFE_componentWillMount(): void {
        this.populateQuestionTypeData();
    }


    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderquestiontypesTable();


        return (
            <div>
                {contents}
            </div>
        );
    }
}
