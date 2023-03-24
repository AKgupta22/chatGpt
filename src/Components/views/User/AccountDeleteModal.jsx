import { Button, Modal, Spin } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosBase from '../../../utils/axios';

const DeleteAccountButton = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleDeleteAccount = async () => {
        setIsLoading(true)
        try {
            await axiosBase.delete('auth/user/')
            setIsLoading(false)
            setModalVisible(false);
            localStorage.clear()
            navigate('/')
        }
        catch (e) {
            setIsLoading(false)
            console.log(e);
            setErrorMsg(e.response?.data?.detail || 'Something went wrong')
        }
    };

    return (
        <div className="modal_container">
            <Button type="primary" onClick={() => setModalVisible(true)}>
                Deactivate your account
            </Button>
            <Modal
                title="Confirm Account Deactivation"
                open={modalVisible}
                onOk={handleDeleteAccount}
                okText={isLoading ? <Spin /> : 'Deactivate'}

                onCancel={() => setModalVisible(false)}
            >
                <p>Are you sure you want to deactivate your account?</p>
                <p className='errorMsg'>{errorMsg}</p>
            </Modal>
        </div>
    );
};

export default DeleteAccountButton;
