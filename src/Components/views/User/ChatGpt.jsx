import { Col, Row } from 'antd'
import React from 'react'
import LeftNav from '../../Common/LeftNav'
import ChatGptForm from './ChatGptForm'
import UserDetails from './UserDetails'

export default function ChatGpt() {
  return (
    <>
      <Row>
        <Col xs={10} md={8} lg={6} xl={4}>
          <LeftNav />
        </Col>
        <Col xs={14} md={16} lg={18} xl={20}>
          <UserDetails />
          <ChatGptForm />
        </Col>
      </Row>
    </>
  )
}
