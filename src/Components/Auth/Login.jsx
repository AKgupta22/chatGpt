import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import FormWrapper from '../Common/FormWrapper';
import { useNavigate } from 'react-router-dom';
import axiosBase from '../../utils/axios'

const Login = () => {
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [form] = Form.useForm();

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
                localStorage.setItem('username', response.data?.user?.username)
                localStorage.setItem('token', response.data?.token)
                localStorage.setItem('role', response.data?.role)
                navigate('profile')
            }
            form.resetFields()
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
        <>
            <FormWrapper headerText="Login" linkText="Don't have account? Register Now" linkTo="/register">
                <Form
                    name="basic"
                    style={{ width: "80%", margin: "auto" }}
                    className='auth-form'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    form={form}

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
                    <div style={{ textAlign: "center" }}>
                        <Button style={{ width: "100px" }} type="primary" htmlType="submit" className='form-button'>
                            {isLoading ? 'Please wait...' : "Login"}
                        </Button></div>
                </Form>
                <p className='errorMsg'>{errorMsg}</p>
            </FormWrapper>
        </>
    )
}

export default Login;