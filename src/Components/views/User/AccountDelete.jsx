import { Col, Row } from 'antd'
import React from 'react'
import LeftNav from '../../Common/LeftNav'
import UserDetails from './UserDetails'
import AccountDeleteModal from './AccountDeleteModal'

export default function AccountDelete() {
    return (
        <>
            <Row>
                <Col xs={10} md={8} lg={6} xl={4}>
                    <LeftNav />
                </Col>
                <Col xs={14} md={16} lg={18} xl={20}>
                    <UserDetails />
                    <AccountDeleteModal />
                </Col>
            </Row>
        </>
    )
}
