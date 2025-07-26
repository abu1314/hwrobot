import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AntdProvider } from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '昊旺智能系统',
  description: '昊旺智能系统 - 企业级应用',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <AntdProvider>
          {children}
        </AntdProvider>
      </body>
    </html>
  );
}
