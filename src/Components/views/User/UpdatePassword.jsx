import React, { useState } from 'react';
import { Button, Form, Input, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import axiosBase from '../../../utils/axios'

const UpdatePassword = () => {
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onFinish = async (values) => {
        setIsLoading(true)
        try {
            const response = await axiosBase.post('auth/update-password/', values)
            setErrorMsg('')
            if (response.data?.message) {
                localStorage.clear()
                navigate('/login')
            }
        }
        catch (e) {
            console.log(e);
            setIsLoading(false)
            setErrorMsg(e.response?.data?.message || 'Something went wrong')
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: "70%", margin: "auto", marginTop: "2rem" }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"

            >
                <Form.Item
                    name="current_password"
                    rules={[{ required: true, message: 'Please enter your current password!' }]}
                >
                    <Input.Password placeholder='Enter Current Password' />
                </Form.Item>
                <Form.Item
                    name="new_password"
                    rules={[{ required: true, message: 'Please enter your new password!' }]}
                >
                    <Input.Password placeholder='Enter New Password' />
                </Form.Item>

                <div>
                    <Button type="primary" htmlType="submit" className='form-button'>
                        {isLoading ? <Spin /> : "Update Password"}
                    </Button>
                </div>
            </Form>
            <p className='errorMsg'>{errorMsg}</p>
        </>
    )
}

export default UpdatePassword;