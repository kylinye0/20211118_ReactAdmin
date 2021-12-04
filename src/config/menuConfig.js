
import {
    ContainerOutlined,
    HomeOutlined,
    UserOutlined,
    IdcardOutlined,
    ZhihuOutlined,
    BarsOutlined,
    BarChartOutlined,
    LineChartOutlined,
    PieChartOutlined
} from '@ant-design/icons';
import React from "react";
export const menuList=[
    {
        title:'首页',
        key:'/home',
        icon:<HomeOutlined />
          /*  {render: (text, record) => (
            <Space size="middle">
                <HomeOutlined />
            </Space>)}*/
    },
    {
        title:'用户管理',
        key:'/user',
        icon:<UserOutlined />
    },
    {
        title:'角色管理',
        key:'/role',
        icon:<IdcardOutlined />
    },
    {
        title:'知识库',
        key:'/itoperations',
        icon:<ZhihuOutlined />,
        children:[
            {
                title:'类型管理',
                key:'/questiontype',
                icon:<BarsOutlined />
            },{
                title:'知识库管理',
                key:'/itoperation',
                icon:<ContainerOutlined />
            }
        ]
    },
    {
        title:'图表',
        key:'/charts',
        icon:'charts',
        children:[
            {
                title:'柱状图',
                key:'/bar',
                icon:<BarChartOutlined />
            },{
                title:'线状图',
                key:'/line',
                icon:<LineChartOutlined />
            },{
                title:'饼状图',
                key:'/pie',
                icon:<PieChartOutlined/>
            }
        ]
    },
];

export const itopemenuList=[
    {
        title:'首页',
        key:'/home',
        icon:<PieChartOutlined />
    },
    {
        title:'知识库',
        key:'/itoperations',
        icon:<ZhihuOutlined />,
        children:[
            {
                title:'增加知识库',
                key:'/itoperation/add',
                icon:<UserOutlined />
            },
            {
                title:'知识库列表',
                key:'/itoperation/query',
                icon:<IdcardOutlined />
            }
        ]
    },
    {
        title:'图表',
        key:'/charts',
        icon:'charts',
        children:[
            {
                title:'柱状图',
                key:'/bar',
                icon:<BarChartOutlined />
            },{
                title:'线状图',
                key:'/line',
                icon:<LineChartOutlined />
            },{
                title:'饼状图',
                key:'/pie',
                icon:<PieChartOutlined/>
            }
        ]
    },
];
export const itopemenuList1=[
    {
        title:'首页',
        key:'/home',
        icon:<PieChartOutlined />
    },
    {
        title:'知识库',
        key:'/itoperations',
        icon:<ZhihuOutlined />,
        children:[
            {
                title:'增加知识库',
                key:'/itoperation/add',
                icon:<UserOutlined />
            },
            {
                title:'知识库列表',
                key:'/itoperation/query',
                icon:<IdcardOutlined />
            }
        ]
    },
    {
        title:'图表',
        key:'/charts',
        icon:'charts',
        children:[
            {
                title:'柱状图',
                key:'/bar',
                icon:<BarChartOutlined />
            },{
                title:'线状图',
                key:'/line',
                icon:<LineChartOutlined />
            },{
                title:'饼状图',
                key:'/pie',
                icon:<PieChartOutlined/>
            }
        ]
    },
];
// eslint-disable-next-line
//export  {itopemenuList,menuList};

