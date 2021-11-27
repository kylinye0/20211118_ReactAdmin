import React, { Component } from 'react';
import '../../antd.less';

import {Table, Space, Input, Button} from 'antd';
import moment from 'moment';
import {SearchOutlined} from '@ant-design/icons';
import {reqItoperation} from "../../api/index";



export default class Query extends Component {
    static displayName = Query.name;

    constructor(props) {
        super(props);
        this.state = {
            itoperations: [],
            loading: true,
            searchText: '',
            searchedColumn: '',
        };
    }

    componentDidMount() {
        this.populateITOperationData();
    }


   /* getColumnSearchProps = dataIndex => (
        {
            filterDropdown: ({ setSelectedkeys, selectedKeys, confirm, clearFilters }) => (
                <div>
                    <Input />
                    <Space>
                        <Button>搜索</Button>
                        <Button>重置</Button>
                        <Button>筛选</Button>
                    </Space>
                </div>
            ),
        }
    );*/

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`搜索 ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        搜索
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        重置
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        筛选
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
      /*  render: text =>
            this.state.searchedColumn === dataIndex ? (
                    <label style={backgroundColor:'ffc069'}></label>
               {/!* <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />*!/}
            ) : (
                text
            ),*/
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

     renderitoperationsTable(itoperations) {
        const columns = [
            {
                title: '序列号',
                dataIndex: 'ID',
                key: 'id',
                render: text => <a href="#!">{text}</a>,
                sorter: (a, b) => a.id - b.id,
                /*  filters: [{
                      text: '3',
                      value:'3',
                  }],*/
                /*   onFilter: (value, record) => alert(record.name.include(value)),*/
            },
           /* {
                title: '问题号',
                dataIndex: 'qno',
                key: 'qno',
                
                render: text => <a >{text}</a>,
                //sorter: (a, b) => a.id - b.id,
                  filters: [{
                      text: '3',
                      value:'3',
                  }],
                   onFilter: (value, record) => alert(record.name.include(value)),
            },*/
            {
                title: 'IT相关',
                dataIndex: 'QuestionType',
                key: 'questionType',
                filters: [
                    {
                        text: '用友',
                        value: '用友',
                    },
                    {
                        text: 'ERP',
                        value: 'ERP',
                    },
                    {
                        text: '系统',
                        value: '系统',
                    },
                    {
                        text: 'Office',
                        value: 'Office',
                    },
                    {
                        text: '加密',
                        value: '加密',
                    },
                    {
                        text: '爱数',
                        value: '爱数',
                    },
                    {
                        text: '邮箱',
                        value: '邮箱',
                    },
                    {
                        text: 'OA',
                        value: 'OA',
                    },
                ],
                onFilter: (value, record) => record.questionType.indexOf(value)===0,
                /* onFilter: (value, record) => alert(value + record.questionType),*/

            },
            {
                title: 'IT问题',
                dataIndex: 'Question',
                key: 'question',
                ...this.getColumnSearchProps('question'),
                /* filterDropdown:  ({ setSelectedkeys, selectedKeys, confirm, clearFilters }) => (
                <div>
                 <Input />
                 <Space>
                     <Button>搜索</Button>
                     <Button>重置</Button>
                     <Button>筛选</Button>
                 </Space>
                 </div>
             )*/
            },
            {
                title: 'IT解决方案',
                key: 'solve',
                dataIndex: 'Solve',
                ...this.getColumnSearchProps('solve'),
                /*render: tags => (
                    <>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),*/
            },
            {
                title: '登记人',
                key: 'registrant',
                dataIndex: 'Registrant',
                filters: [
                    {
                        text: '王雷',
                        value: '王雷',
                    },
                    {
                        text: '叶凯',
                        value: '叶凯',
                    },
                    {
                        text: '凌松赞',
                        value: '凌松赞',
                    },
                ],
                onFilter: (value, record) => record.registrant.indexOf(value)===0,
            },
            {
                title: '登记时间',
                key: 'regisDate',
                dataIndex: 'RegisDate',
                render: (value, record) => (
                    <a href="#!">{moment(record.RegisDate).format('YYYY-MM-DD')}</a>
                ),
                sorter: (a, b) => new Date(a.regisDate).getTime() - new Date(b.regisDate).getTime(),
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a href="#!">Invite {record.id}</a>
                        <a href="#!">Delete</a>
                    </Space>
                ),
            },
        ];

        return (
            <Table columns={columns} dataSource={itoperations}></Table>
        );
    }

    render() {


        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderitoperationsTable(this.state.itoperations);


        return (
            <div>
                <h1 id="tabelLabel" >IT知识库列表</h1>
                <p>筛选排序都在标题里</p>
                {contents}
            </div>
        );
    }

    async populateITOperationData() {
        /*const response = await fetch('ITOperation/id=5'); api/ITOperations*/
        /*iconst response = await fetch('api/ITOperations');
        f (response.status === 200) {
            var data = [];
            const json = await response.json();
            if (JSON.stringify(json).indexOf("{")===0) {
                data.push(json);
            }
            else {
                data = json;
            }
            this.setState({ itoperations: data, loading: false });
        }
        else {
            alert("网页发生错误，代码是"+response.status);
        }*/

       const itoperation=await reqItoperation();
       const data = JSON.stringify(itoperation);
       alert(data);
       this.setState({itoperations:data,loading:false});
    }
}
