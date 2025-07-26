'use client';

import React from 'react';
import { 
  Layout, 
  Menu, 
  Card, 
  Row, 
  Col, 
  Typography, 
  Avatar, 
  Badge, 
  Progress, 
  List, 
  Tag,
  Button,
  Dropdown,
  Space
} from 'antd';
import { 
  DashboardOutlined, 
  TeamOutlined, 
  FileTextOutlined, 
  SettingOutlined, 
  BellOutlined, 
  UserOutlined,
  DownOutlined,
  BarChartOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  SyncOutlined,
  WarningOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

// 仪表盘数据
const statsData = [
  {
    title: '总用户数',
    value: '1,248',
    icon: <TeamOutlined style={{ color: '#1890ff', fontSize: 24 }} />,
    color: '#1890ff',
    trend: '+12% 月环比'
  },
  {
    title: '活跃设备',
    value: '856',
    icon: <BarChartOutlined style={{ color: '#52c41a', fontSize: 24 }} />,
    color: '#52c41a',
    trend: '+8% 周环比'
  },
  {
    title: '任务完成率',
    value: '89%',
    icon: <CheckCircleOutlined style={{ color: '#722ed1', fontSize: 24 }} />,
    color: '#722ed1',
    progress: 89
  },
  {
    title: '系统负载',
    value: '42%',
    icon: <SyncOutlined spin style={{ color: '#faad14', fontSize: 24 }} />,
    color: '#faad14',
    progress: 42
  }
];

// 最近活动
const recentActivities = [
  {
    title: '新用户注册',
    description: '张经理 注册了系统账号',
    time: '5分钟前',
    icon: <UserOutlined style={{ color: '#1890ff' }} />
  },
  {
    title: '系统更新',
    description: '系统已更新至 v2.5.0 版本',
    time: '2小时前',
    icon: <SyncOutlined style={{ color: '#52c41a' }} />
  },
  {
    title: '维护提醒',
    description: '计划于今晚 2:00-4:00 进行系统维护',
    time: '5小时前',
    icon: <WarningOutlined style={{ color: '#faad14' }} />
  }
];

// 快捷操作
const quickActions = [
  { title: '新建工单', icon: <FileTextOutlined />, color: '#1890ff' },
  { title: '用户管理', icon: <TeamOutlined />, color: '#52c41a' },
  { title: '系统设置', icon: <SettingOutlined />, color: '#722ed1' },
  { title: '数据报表', icon: <BarChartOutlined />, color: '#faad14' }
];

export default function Dashboard() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <Sider 
        width={200} 
        theme="light"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          boxShadow: '2px 0 8px 0 rgba(29,35,41,0.05)'
        }}
      >
        <div style={{ padding: '24px 16px', textAlign: 'center' }}>
          <Title level={4} style={{ margin: 0, color: '#1890ff' }}>昊旺智能系统</Title>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          style={{ borderRight: 0 }}
          items={[
            {
              key: 'dashboard',
              icon: <DashboardOutlined />,
              label: '控制台',
            },
            {
              key: 'users',
              icon: <TeamOutlined />,
              label: '用户管理',
            },
            {
              key: 'reports',
              icon: <BarChartOutlined />,
              label: '数据报表',
            },
            {
              key: 'settings',
              icon: <SettingOutlined />,
              label: '系统设置',
            },
          ]}
        />
      </Sider>

      <Layout style={{ marginLeft: 200 }}>
        {/* 顶部导航 */}
        <Header style={{ 
          padding: '0 24px', 
          background: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 1px 4px rgba(0,21,41,0.08)'
        }}>
          <div></div> {/* 占位 */}
          
          <Space size="large">
            <Badge count={5} size="small">
              <Button type="text" icon={<BellOutlined style={{ fontSize: 16 }} />} />
            </Badge>
            
            <Dropdown
              menu={{
                items: [
                  { key: 'profile', label: '个人中心' },
                  { key: 'settings', label: '账户设置' },
                  { type: 'divider' },
                  { key: 'logout', label: '退出登录' },
                ],
              }}
              placement="bottomRight"
            >
              <Button type="text" style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar style={{ backgroundColor: '#1890ff' }}>管</Avatar>
                <span style={{ margin: '0 8px' }}>管理员</span>
                <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </Header>

        {/* 主内容区 */}
        <Content style={{ 
          margin: '24px 16px 0',
          overflow: 'initial',
          minHeight: 'calc(100vh - 112px)'
        }}>
          <div style={{ padding: 24, background: '#fff', borderRadius: 8 }}>
            <Title level={4} style={{ marginBottom: 24 }}>系统概览</Title>
            
            {/* 统计卡片 */}
            <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
              {statsData.map((stat, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <Card style={{ borderRadius: 8, boxShadow: '0 1px 2px 0 rgba(0,0,0,0.03)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <Text type="secondary">{stat.title}</Text>
                        <Title level={3} style={{ margin: '8px 0' }}>{stat.value}</Title>
                        {stat.trend && <Text type="secondary" style={{ fontSize: 12 }}>{stat.trend}</Text>}
                      </div>
                      <div style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: `${stat.color}10`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {stat.icon}
                      </div>
                    </div>
                    {stat.progress !== undefined && (
                      <div style={{ marginTop: 16 }}>
                        <Progress 
                          percent={stat.progress} 
                          showInfo={false} 
                          strokeColor={stat.color}
                          trailColor="#f0f0f0"
                        />
                      </div>
                    )}
                  </Card>
                </Col>
              ))}
            </Row>

            <Row gutter={[16, 16]}>
              {/* 最近活动 */}
              <Col xs={24} md={16} style={{ marginBottom: 24 }}>
                <Card 
                  title="最近活动" 
                  variant="borderless"
                  extra={<Link href="#">查看全部</Link>}
                >
                  <List
                    itemLayout="horizontal"
                    dataSource={recentActivities}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <div style={{
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              backgroundColor: `${item.icon.props.style.color}10`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              {item.icon}
                            </div>
                          }
                          title={item.title}
                          description={item.description}
                        />
                        <div>
                          <Text type="secondary">{item.time}</Text>
                        </div>
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>

              {/* 快捷操作 */}
              <Col xs={24} md={8}>
                <Card title="快捷操作" bordered={false}>
                  <Row gutter={[16, 16]}>
                    {quickActions.map((action, index) => (
                      <Col span={12} key={index}>
                        <Button 
                          type="text" 
                          style={{
                            width: '100%',
                            height: 100,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px dashed #d9d9d9',
                            borderRadius: 8
                          }}
                        >
                          <div style={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundColor: `${action.color}10`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 8
                          }}>
                            {React.cloneElement(action.icon, { 
                              style: { ...action.icon.props.style, color: action.color, fontSize: 18 } 
                            })}
                          </div>
                          <Text>{action.title}</Text>
                        </Button>
                      </Col>
                    ))}
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
          
          {/* 页脚 */}
          <div style={{ 
            textAlign: 'center', 
            padding: '16px 0',
            color: 'rgba(0, 0, 0, 0.45)'
          }}>
            昊旺智能系统 ©{new Date().getFullYear()} 版权所有
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
