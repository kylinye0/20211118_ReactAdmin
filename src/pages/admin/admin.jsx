import React, {Component} from 'react';
import {Navigate,Routes,Route} from 'react-router-dom';
import memoryUtils from '../../utils/memoryUtils';
import MainLayout from '../../components/mainlayout';
import Home from  '../home/home';
import Itoperation from '../itoperation/itoperation';
import Add from '../itoperation/add';
import Query from '../itoperation/query';
import Role from '../role/role';
import User from '../user/user';
import Bar from '../charts/bar';
import Line from '../charts/line';
import Pie from '../charts/pie';
import Questiontype from '../questiontype/questiontype';
import storageUtils from '../../utils/storageUtils';
//读取local中保存user，保存到内存中
var leftnav = storageUtils.getLeftnav();

export default class Admin extends Component {

    render() {

        const user = memoryUtils.user;
        //alert(JSON.stringify(user.SafeLevel));
        //console.log(JSON.stringify(user));
        if(!leftnav || leftnav==="")
        {
            memoryUtils.leftnavkey ="1";
        }
        else
        {
            memoryUtils.leftnavkey =leftnav;
        }
        if (!user || !user.ID) {
            return <Navigate to="/login"/>
        }
        if(user.SafeLevel===0)
        {
            return (
                //navkey={memoryUtils.leftnavkey }
                <MainLayout children={<Home />}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/role' element={<Role />} />
                        <Route path='/user' element={<User />} />
                        <Route path='/itoperation' element={<Itoperation />} />
                        <Route path='/line' element={<Line />} />
                        <Route path='/pie' element={<Pie />} />
                        <Route path='/bar' element={<Bar />} />
                        <Route path='/itoperation/add' element={<Add />} />
                        <Route path='/itoperation/query' element={<Query />} />
                        <Route path='/questiontype' element={<Questiontype />} />
                    </Routes>
                </MainLayout>);
        }
        else
        {return <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/itoperation/add' element={<Add />} />
            <Route path='/itoperation/query' element={<Query />} />
        </Routes>}

    }
}
