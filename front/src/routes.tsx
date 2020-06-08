import React from 'react';
import StudentList from './pages/StudentList';
import { Router, Redirect } from '@reach/router';
import MainLayout from './containers/MainLayout/MainLayout';

const Routes = () => {
    return (
        <Router>
            <MainLayout path="/">
                <StudentList path="/student" />
                <Redirect from="/" to="/student" />
            </MainLayout>
        </Router>
    );
};

export default Routes;
