import React, {Component} from 'react';
import {Navigate,Routes,Route} from 'react-router-dom';
import memoryUtils from '../../utils/memoryUtils';
import MainLayout from '../../components/mainlayout';
import Home from  '../home/home';
import Add from '../itoperations/add';
import Query from '../itoperations/query';
import storageUtils from '../../utils/storageUtils';
//读取local中保存user，保存到内存中
var leftnav = storageUtils.getLeftnav();

export default class Admin extends Component {

    render() {

        const user = memoryUtils.user;
        alert(JSON.stringify(user.SafeLevel));
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

        return (
            //navkey={memoryUtils.leftnavkey }
            <MainLayout children={<Home />}>
            <Routes>
            <Route path='/home' element={<Home />} />
                <Route path='/itoperations/add' element={<Add />} />
                <Route path='/itoperations/query' element={<Query />} />
            </Routes>
            </MainLayout>);
    }
}
