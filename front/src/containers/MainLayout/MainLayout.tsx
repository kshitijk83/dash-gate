import React, { useState, FC } from 'react';
import { Link } from '@reach/router';
import { Layout, Menu } from 'antd';
import * as appConstant from '../../constants/appConstant';
import './MainLayout.css';

const MainLayout: FC = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const { Sider, Content } = Layout;

    function toggle() {
        setCollapsed((prev) => !prev);
    }

    const menuItems = appConstant.navBar.map((item, i) => (
        <Menu.Item key={i + 1} icon={<item.icon />}>
            <Link style={{ color: 'inherit' }} to={item.to}>
                {item.title}
            </Link>
        </Menu.Item>
    ));

    return (
        <Layout>
            <Sider
                width="15%"
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    paddingTop: 50,
                }}
                collapsible={true}
                collapsed={collapsed}
                onCollapse={toggle}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    {menuItems}
                </Menu>
            </Sider>
            <Layout style={{ marginLeft: '15%' }}>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                            overflow: 'auto',
                        }}
                    >
                        {props.children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
