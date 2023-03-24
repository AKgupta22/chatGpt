import { Button, Modal, Spin, Switch } from 'antd';
import { Form, Input } from 'antd';
import { useState } from 'react';
import axiosBase from '../../../utils/axios';

const ModifyUserModal = ({ isShowModal, setIsShowModal, editId, setEditId, editData, setEditData, fetchData }) => {

    const [errorMsg, setErrorMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isActive, setIsActive] = useState(editData?.is_active)

    const handleClose = async (values) => {
        setIsLoading(true)
        try {
            if (editId) {
                const activePayload = {
                    is_active: isActive
                }
                const payload = { ...values, ...activePayload }
                console.log(payload);
                await axiosBase.put(`auth/admin-users/${editId}/`, payload)
            }
            else {
                await axiosBase.post('auth/admin-users/', values)
            }
            setIsLoading(false)
            fetchData()
            setEditData({})
            setIsShowModal(false)
            setEditId('')
        }
        catch (e) {
            setErrorMsg('')
            setIsLoading(false)
            console.log(e);
            if (e.response?.data?.email)
                setErrorMsg(e.response?.data?.email[0])
            else if (e.response?.data?.username)
                setErrorMsg(e.response?.data?.username[0])
            else
                setErrorMsg('Something went wrong')
        }

    }

    const handleCancel = async () => {
        setEditData({})
        setIsShowModal(false)
        setEditId('')
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Modal
                title={editId ? `Edit UserId ${editId}` : 'Add new user'}
                centered
                open={isShowModal}
                okButtonProps={{ style: { display: "none" } }}
                onCancel={() => handleCancel()}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                        width: "80%",
                        margin: "auto"
                    }}
                    initialValues={{
                        email: editData?.email || "",
                        username: editData?.username || ""
                    }}
                    onFinish={handleClose}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input autoComplete='new-username' />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input autoComplete='new-email' />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password autoComplete='new-password' />
                    </Form.Item>
                    {editId && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "1rem" }}>
                        <p>Status:</p>
                        <Switch defaultChecked={isActive} onChange={(checked) => setIsActive(checked)} style={{ marginLeft: ".5rem" }} />
                    </div>}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button type='primary' htmlType='submit'>{isLoading ? <Spin /> : editId ? "Edit" : "Add"}</Button>
                    </div>
                </Form>
                <p className='errorMsg'>{errorMsg}</p>
            </Modal>
        </>
    );
};
export default ModifyUserModal;