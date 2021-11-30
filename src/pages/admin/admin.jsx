import React, {Component} from 'react';
import {Navigate,Routes,Route} from 'react-router-dom';
import memoryUtils from '../../utils/memoryUtils';
import MainLayout from '../../components/mainlayout';
import Home from  '../home/home';
import Add from '../itoperations/add';
import Query from '../itoperations/query';

export default class Admin extends Component {

    render() {

        const user = memoryUtils.user;
        if (!user || !user.ID) {
            return <Navigate to="/login"/>
        }
        return (
            <MainLayout>
            <Routes>
            <Route path='/home' element={<Home />} />
                <Route path='/itoperations/add' element={<Add />} />
                <Route path='/itoperations/query' element={<Query />} />



            </Routes>

            </MainLayout>);
    }
}
