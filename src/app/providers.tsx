'use client';

import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

export function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: '#1890ff',
            borderRadius: 4,
            colorBgContainer: '#ffffff',
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
}
