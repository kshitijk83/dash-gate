import React, { FC, useEffect } from 'react';
import { Table, Tag } from 'antd';
import { RouteComponentProps } from '@reach/router';
import { useStudentList } from '../hooks/useStudentList';
import { useHttp } from '../hooks/useHttp';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Roll No.',
        dataIndex: 'rollno',
        key: 'rollno',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Year',
        dataIndex: 'year',
        key: 'year',
    },
    {
        title: 'Hostel',
        dataIndex: 'hostel',
        key: 'hostel',
    },
    {
        title: 'Tag',
        dataIndex: 'out_of_campus',
        key: 'tag',
        render: (tag: boolean) =>
            tag ? (
                <Tag color="red">Out of Campus</Tag>
            ) : (
                <Tag color="green">In Campus</Tag>
            ),
    },
];

const StudentList: FC<RouteComponentProps> = (props) => {
    const { state, set } = useStudentList();
    const {sendRequest,state:httpState }=useHttp();
    const dataSource = state&&state.map((student) => ({
            key: student._id,
            ...student,
        }));

    useEffect(() => {
        sendRequest({
            url: 'student/all',
            method: 'GET',
            identifier: 'all'
        })
    }, []);

    useEffect(() => {
        // console.log(httpState);
        set(httpState.data)

    }, [httpState.successMessage]);
    return (
        <Table
            pagination={{
                position: ['bottomCenter', 'bottomCenter'],
                defaultCurrent: 1,
                defaultPageSize: 12,
            }}
            columns={columns}
            dataSource={dataSource}
        />
    );
};

export default StudentList;
