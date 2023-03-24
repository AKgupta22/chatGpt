import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'antd'

export default function ConfirmationModal({ message, modalOpen, setModalOpen, navigateUrl, type }) {
    const navigate = useNavigate()
    const handleClose = () => {
        setModalOpen(false)
        navigate(navigateUrl)
    }
    return (
        <div>
            <Modal
                centered
                open={modalOpen}
                okButtonProps={{ style: { display: "none" } }}
                onCancel={() => handleClose()}
            >
                <p style={type === "success" ? { color: "green", fontSize: "16px" } : { color: "red", fontSize: "16px" }}>{message}</p>
            </Modal>
        </div>
    )
}
