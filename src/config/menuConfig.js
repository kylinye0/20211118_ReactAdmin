
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
const menuList=[
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

export default menuList;

