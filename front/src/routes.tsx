import React from 'react';
import StudentList from './pages/StudentList';
import { Router, Redirect } from '@reach/router';
import MainLayout from './containers/MainLayout/MainLayout';
import AddNewEntry from './pages/AddNewEntry';
import * as routeConstants from './constants/routeConstant';

const Routes = () => {
    return (
        <Router>
            <MainLayout path="/">
                <StudentList path={routeConstants.STUDENT_LIST} />
                <AddNewEntry path={routeConstants.ADD_ENTRY} />
                {/* <Redirect
                    from={routeConstants.HOME}
                    to={routeConstants.STUDENT_LIST}
                /> */}
            </MainLayout>
        </Router>
    );
};

export default Routes;
