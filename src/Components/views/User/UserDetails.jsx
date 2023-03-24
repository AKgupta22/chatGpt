import React, { useEffect, useState } from 'react'
import { LogoutOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { profileImage } from '../../../utils/constant'

export default function UserDetails() {
    const [username, setUsername] = useState('User')

    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/')
    }

    useEffect(() => {
        const username = localStorage.getItem('username')
        if (username)
            setUsername(username)
    }, [])

    return (
        <div className='user-details-container'>
            <div className='user-details-container_header'>
                Hello {username}
            </div>
            <div className='user-details-container_image'>
                <img src={profileImage} alt="profile" />
                <Button type="primary" shape="circle" icon={<LogoutOutlined />} size={'Large'} onClick={() => logout()} />
            </div>
        </div>
    )
}
