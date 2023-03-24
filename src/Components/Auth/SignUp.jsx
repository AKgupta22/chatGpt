import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Spin } from 'antd';
import FormWrapper from '../Common/FormWrapper';
import axiosBase from '../../utils/axios'

const SignUp = () => {
    const [successMsg, setSuccessMsg] = useState('')
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
            const response = await axiosBase.post('auth/signup/', values)
            setErrorMsg('')
            if (response.data?.msg) {
                setSuccessMsg(response.data?.msg)
                setIsLoading(false)
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

        <FormWrapper headerText="SignUp" linkText="Already have account? Login" linkTo="/">
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
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className='form-button'>
                        {isLoading ? <Spin /> : "SignUp"}
                    </Button>
                </Form.Item>
            </Form>
            <p className='successMsg'>{successMsg}</p>
            <p className='errorMsg'>{errorMsg}</p>
        </FormWrapper>
    )
}

export default SignUp;