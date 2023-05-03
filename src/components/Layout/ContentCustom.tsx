import React from 'react';
import {Breadcrumb, theme} from "antd";
import { Content } from 'antd/es/layout/layout'
const ContentCustom = (props: any) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return(
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Cat</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                Cat and dog go to hell.
            </div>
        </Content>
    );
};

export default ContentCustom;

