import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import {
    Row,
    Col,
    Divider,
    Typography,
    Form,
    Input,
    InputNumber,
    Button,
    Select,
} from 'antd';
import { css } from '@emotion/core';

import { useHttp } from '../hooks/useHttp';
const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    // eslint-disable-next-line
    required: '${label} is required!',
    types: {
        // eslint-disable-next-line
        email: '${label} is not validate email!',
        // eslint-disable-next-line
        number: '${label} is not a validate number!',
    },
    number: {
        // eslint-disable-next-line
        range: '${label} must be between ${min} and ${max}',
    },
};

const center = css`
    text-align: center;
`;

const AddNewEntry: React.FC<RouteComponentProps> = (props) => {
    const { sendRequest, state: httpState } = useHttp();
    const onFinish = async (values: any) => {
        // const data = await axios.post('/student/create', values);
        sendRequest({
            url: '/student/create',
            data: values,
            method: 'POST',
            identifier: 'studentCreate',
        });
        // console.log(data);
    };

    useEffect(() => {
        // console.log(httpState);
        // eslint-disable-next-line
    }, [httpState.successMessage]);

    return (
        <>
            <Typography.Title css={center} level={2}>
                New Student Entry
            </Typography.Title>
            <Divider />
            <Row>
                <Col span={2}>{null} </Col>
                <Col style={{ marginTop: 100 }} span={22}>
                    <Form
                        {...layout}
                        name="nest-messages"
                        onFinish={onFinish}
                        validateMessages={validateMessages}
                    >
                        <Form.Item
                            name={['name']}
                            label="Name"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['gender']}
                            label="Gender"
                            rules={[{ required: true }]}
                        >
                            <Select>
                                <Select.Option value="F">Female</Select.Option>
                                <Select.Option value="M">Male</Select.Option>
                                <Select.Option value="O">Other</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name={['rollno']}
                            label="Rollno"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['phone']}
                            label="Phone"
                            rules={[{ required: false }]}
                        >
                            <InputNumber width="100%" />
                        </Form.Item>
                        <Form.Item
                            rules={[{ required: true }]}
                            name={['year']}
                            label="Year"
                        >
                            <Select>
                                <Select.Option value="1">1st</Select.Option>
                                <Select.Option value="2">2nd</Select.Option>
                                <Select.Option value="3">3rd</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            rules={[{ required: true }]}
                            name={['hostel']}
                            label="Hostel"
                        >
                            <Select>
                                <Select.Option value="KBH"> KBH</Select.Option>
                                <Select.Option value="UBH">UBH</Select.Option>
                                <Select.Option value="Himadgri">
                                    Himadgri
                                </Select.Option>
                                <Select.Option value="AGH">AGH</Select.Option>
                                <Select.Option value="DBH">DBH</Select.Option>
                                <Select.Option value="NBH">NBH</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name={['out_of_campus']}
                            label="Out of Campus"
                            rules={[{ required: true }]}
                        >
                            <Select>
                                <Select.Option value="T"> yes</Select.Option>
                                <Select.Option value="F">No</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            rules={[{ required: false }]}
                            name={['remarks']}
                            label="Remarks"
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={2}>{null}</Col>
            </Row>
        </>
    );
};
export default AddNewEntry;
