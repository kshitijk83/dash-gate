import React, { useState, FC } from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import { Layout, Menu } from 'antd';
import { css } from '@emotion/core';
import * as appConstant from '../../constants/appConstant';
import './MainLayout.css';
import SubMenu from 'antd/lib/menu/SubMenu';

const SIDER_WIDTH = '280px';

// css for adjusting
const siderStyle = css`
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    padding-top: 50px;
`;

const layoutContentStyle = css`
    padding: 24px;
    min-height: 360px;
    overflow: auto;
`;

const layoutStyle = css`
    margin-left: ${SIDER_WIDTH};
    width: 100vh;
`;

const MainLayout: FC<RouteComponentProps> = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const { Sider, Content } = Layout;

    function toggle() {
        setCollapsed((prev) => !prev);
    }

    const menuItems = appConstant.navBar.map((item) => {
        if (item.submenu) {
            return (
                <SubMenu
                    key={item.title}
                    icon={<item.icon />}
                    title={item.title}
                >
                    {item.submenu.map((subMenuItem) => (
                        <Menu.Item
                            key={subMenuItem.title}
                            onClick={() => navigate(subMenuItem.to)}
                        >
                            {subMenuItem.title}
                        </Menu.Item>
                    ))}
                </SubMenu>
            );
        } else {
            return (
                <Menu.Item
                    onClick={() => navigate(item.to)}
                    key={item.title}
                    icon={<item.icon />}
                >
                    {item.title}
                </Menu.Item>
            );
        }
    });

    return (
        <Layout>
            <Sider
                width={SIDER_WIDTH}
                css={siderStyle}
                collapsible={true}
                collapsed={collapsed}
                onCollapse={toggle}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    {menuItems}
                </Menu>
            </Sider>
            <Layout css={layoutStyle}>
                <Content
                    style={{
                        margin: '24px 16px 0',
                        overflow: 'initial',
                        backgroundColor: '#fff',
                    }}
                >
                    <div css={layoutContentStyle}>{props.children}</div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
