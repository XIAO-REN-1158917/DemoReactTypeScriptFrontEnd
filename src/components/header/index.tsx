import React from 'react';
import { UserOutlined, PoweroffOutlined, DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { clearToken } from '../../store/login/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank">
                Personal
            </a>
        ),
        icon: <UserOutlined />,
    },
    {
        key: '2',
        label: (
            <a target="_blank">
                Logout
            </a>
        ),
        icon: <PoweroffOutlined />,
    },
];

function MyHeader() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onClick: MenuProps['onClick'] = ({ key }) => {
        if (key === "1") {
            // redirect to personal center
            navigate("/personal")
        } else {
            // logout
            dispatch(clearToken())
            sessionStorage.clear()
        }
    }
    return <div>
        <Dropdown menu={{ items, onClick }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    Welcome {sessionStorage.getItem("username")}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    </div>
}

export default MyHeader