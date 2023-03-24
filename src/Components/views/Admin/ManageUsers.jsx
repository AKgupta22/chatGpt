import React, { useEffect, useState } from 'react'
import { Button, Spin, Table } from 'antd';
import { CheckOutlined, DeleteOutlined, EditOutlined, PlusCircleOutlined, StopOutlined } from '@ant-design/icons';
import axiosBase from '../../../utils/axios'
import ModifyUserModal from './ModifyUserModal';

export default function ManageUsers() {

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: '',
      key: 'is_active',
      render: (record) => record.is_active ? <CheckOutlined style={{ color: "green", fontSize: "1.4rem" }} /> : <StopOutlined style={{ color: "red", fontSize: "1.4rem" }} />
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => <div style={{ display: "flex" }}>
        <Button type='primary' danger onClick={() => handleDelete(record.id)}>{
          isLoading && deleteId === record.id ? <Spin /> : <DeleteOutlined />
        }</Button>
        <Button style={{ marginLeft: ".5rem" }} type='primary' onClick={() => handleEdit(record.id)}><EditOutlined /></Button>
      </div>,
    },
  ];

  const [data, setData] = useState([])
  const [isShowModal, setIsShowModal] = useState(false);
  const [editId, setEditId] = useState('')
  const [editData, setEditData] = useState({})
  const [deleteId, setDeleteId] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    try {
      const response = await axiosBase.get('auth/admin-users/')
      if (response.data) {
        const sortedData = response.data?.sort((a, b) => a.id - b.id)
        setData(sortedData)
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure want to delete this account?')) {
      setDeleteId(id)
      setIsLoading(true)
      try {
        await axiosBase.delete(`auth/admin-users/${id}/`)
        fetchData()
        setDeleteId('')
        setIsLoading(false)
      }
      catch (e) {
        setDeleteId('')
        setIsLoading(false)
        console.log(e);
      }
    }
  }

  const handleAdd = () => {
    setIsShowModal(true)
  }

  const handleEdit = (id) => {
    setEditId(id)
    const singleData = data.find(item => item?.id === id)
    setEditData(singleData)
    setIsShowModal(true)
  }

  return (
    <>
      <div style={{ marginTop: "2rem", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Button type='primary' onClick={handleAdd}><PlusCircleOutlined /></Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: 400, y: 320 }}
        />
      </div>
      {
        isShowModal && <ModifyUserModal isShowModal={isShowModal} setIsShowModal={setIsShowModal} editId={editId} setEditId={setEditId} editData={editData} setEditData={setEditData} fetchData={fetchData} />
      }
    </>
  )
}
