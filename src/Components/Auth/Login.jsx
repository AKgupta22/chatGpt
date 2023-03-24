import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Spin } from 'antd';
import FormWrapper from '../Common/FormWrapper';
import { useNavigate } from 'react-router-dom';
import axiosBase from '../../utils/axios'

const Login = () => {
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            localStorage.clear()
        }
    }, [])

    const onFinish = async (values) => {
        setIsLoading(true)
        try {
            const response = await axiosBase.post('auth/signin/', values)
            setErrorMsg('')
            if (response.data?.token) {
                localStorage.setItem('userId', response.data?.user?.id)
                localStorage.setItem('token', response.data?.token)
                localStorage.setItem('role', response.data?.role)
                navigate('profile')
            }
        }
        catch (e) {
            console.log(e);
            setIsLoading(false)
            setErrorMsg(e.response?.data?.msg || 'Something went wrong')
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <FormWrapper headerText="Login" linkText="Don't have account? Register Now" linkTo="/register">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: "80%", marginLeft: "2%" }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"

            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{
                        required: true,
                        message: 'Please enter your Username!',
                    },]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className='form-button'>
                        {isLoading ? <Spin /> : "Login"}
                    </Button>
                </Form.Item>
            </Form>
            <p className='errorMsg'>{errorMsg}</p>
        </FormWrapper>
    )
}

export default Login;