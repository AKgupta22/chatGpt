import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import FormWrapper from '../Common/FormWrapper';
import axiosBase from '../../utils/axios'
import ConfirmationModal from '../Common/ConfirmationModal';

const SignUp = () => {
    const [errorMsg, setErrorMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [form] = Form.useForm();
    const [openModal, setOpenModal] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')

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
                setOpenModal(true)
                setSuccessMsg(response.data?.msg)
                setIsLoading(false)
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
            <FormWrapper headerText="SignUp" linkText="Already have account? Login" linkTo="/">
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

                    <div style={{ textAlign: "center" }}>
                        <Button style={{ width: "100px" }} type="primary" htmlType="submit" className='form-button'>
                            {isLoading ? 'Please wait...' : "SignUp"}
                        </Button>
                    </div>
                </Form>
                <p className='errorMsg'>{errorMsg}</p>
            </FormWrapper>
            {
                openModal && <ConfirmationModal message={successMsg} modalOpen={openModal} setModalOpen={setOpenModal} navigateUrl='/' type="success" />
            }
        </>
    )
}

export default SignUp;
