import {Menu} from "antd";
import {Link} from "react-router-dom";

const menuList=[
    {
        title:'首页',
        key:'/home',
        icon:'home'
    },
    {
        title:'用户管理',
        key:'/user',
        icon:'user'
    },
    {
        title:'角色管理',
        key:'/role',
        icon:'role'
    },
    {
        title:'用户管理',
        key:'/user',
        icon:'user'
    },
    {
        title:'知识库',
        key:'/itoperations',
        icon:'appstore',
        children:[
            {
                title:'类型管理',
                key:'/questiontype',
                icon:'bars'
            },{
                title:'知识库管理',
                key:'/itoperation',
                icon:'bars'
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
                icon:'bars'
            },{
                title:'线状图',
                key:'/line',
                icon:'bars'
            },{
                title:'饼状图',
                key:'/pie',
                icon:'bars'
            }
        ]
    },
];

export default menuList;


</Menu.Item>
<SubMenu key="sub1" icon={<MailOutlined />} title="图表">
<Menu.Item key="5"><Link to="/bar">柱状图</Link></Menu.Item>
<Menu.Item key="6"><Link to="/line">线状图</Link></Menu.Item>
<Menu.Item key="7"><Link to="/pie">饼状图</Link></Menu.Item>
</SubMenu>
<SubMenu key="sub2" icon={<AppstoreOutlined />} title="知识库">
<Menu.Item key="9"><Link to="/itoperation">类型管理</Link></Menu.Item>
<Menu.Item key="10"><Link to="/itoperation">知识库管理</Link></Menu.Item>
