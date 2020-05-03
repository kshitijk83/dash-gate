import React from 'react'
import StudentList from './pages/StudentList'
import { Router } from '@reach/router'

const Routes = () => {
    return (
        <Router>
            <StudentList path="/" />
        </Router>
    )
}

export default Routes
