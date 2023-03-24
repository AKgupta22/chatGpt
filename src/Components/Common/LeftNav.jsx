import {
    HomeOutlined,
    ProfileOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { NavbarContext } from '../../context/NavbarContext';
import { useContext, useEffect, useState } from 'react';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const LeftNav = () => {
    const [role, setRole] = useState('')

    const navigate = useNavigate();
    const { defaultOpenKey, setDefaultOpenKey, defaultSelectedKey, setDefaultSelectedKey } =
        useContext(NavbarContext);

    const handleMenuClick = ({ key, ...values }) => {
        setDefaultSelectedKey(key)
        setDefaultOpenKey(values.keyPath[1])
        if (key === '1') {
            navigate('/profile');
        }
        if (key === '2') {
            navigate('/chatGpt');
        }
        else if (key === '3') {
            navigate('/deleteAccount');
        }
        else if (key === '4') {
            navigate('/adminHome')
        }
        else if (key === '5') {
            navigate('/hypnoscript')
        }
    };

    const items = (role === 'admin' ? [
        getItem('Profile', 'prof', <ProfileOutlined />, [
            getItem('Update Password', '1'),
            getItem('ChatGPT', '2'),
            getItem('Hypnoscript', '5'),
        ]),
        getItem('Admin', 'admin', <HomeOutlined />, [
            getItem('Manage Users', '4')
        ])
    ] : [
        getItem('Profile', 'prof', <ProfileOutlined />, [
            getItem('Update Password', '1'),
            getItem('ChatGPT', '2'),
            getItem('Hypnoscript', '5'),
            getItem('Deactivate account', '3')
        ])
    ])

    useEffect(() => {
        const role = localStorage.getItem('role')
        if (role)
            setRole(role)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div style={{ height: "100vh" }}>
            <Menu
                defaultSelectedKeys={[defaultSelectedKey]}
                defaultOpenKeys={[defaultOpenKey]}
                mode="inline"
                theme="dark"
                items={items}
                style={{ height: "100%" }}
                onClick={(item) => handleMenuClick(item)}
            />
        </div>
    );
};

export default LeftNav;
