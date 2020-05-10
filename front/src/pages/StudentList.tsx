import React from 'react';
import { Table, Tag } from 'antd';
import { RouteComponentProps } from '@reach/router';
import { useStudentList } from '../hooks/useStudentList';

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

const StudentList = (props: RouteComponentProps) => {
    const { state } = useStudentList();
    const dataSource = state.map((student) => ({
        key: student.id,
        ...student,
    }));

    return (
        <Table
            pagination={{
                position: ['bottomCenter', 'bottomCenter'],
                defaultCurrent: 2,
                defaultPageSize: 12,
            }}
            columns={columns}
            dataSource={dataSource}
        />
    );
};

export default StudentList;
