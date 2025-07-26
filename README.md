# 昊旺智能管理系统

[![Next.js](https://img.shields.io/badge/Next.js-13.4.0+-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.0+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0+-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn_ui-0.7.0+-000000?style=flat-square)](https://ui.shadcn.com/)

昊旺智能管理系统是一个基于 Next.js 13+ 的企业级应用模板，集成了现代化的 UI 组件和开发工具，帮助您快速构建高效、美观的管理系统。

## ✨ 特性

- 🚀 基于 Next.js 13+ App Router
- 🎨 使用 Tailwind CSS 进行样式设计
- 🛠️ 集成了 shadcn/ui 组件库
- 📱 响应式设计，适配各种设备
- 🔒 内置认证和授权系统
- 📊 数据可视化看板
- 🧩 模块化架构，易于扩展

## 🚀 快速开始

### 环境要求

- Node.js 18.0.0 或更高版本
- pnpm 8.x 或更高版本

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 生产构建

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 📁 项目结构

```
src/
├── app/                    # App Router 路由
│   ├── (auth)/             # 认证相关路由
│   ├── (dashboard)/        # 后台管理路由
│   │   ├── settings/       # 系统设置
│   │   └── profile/        # 用户资料
│   ├── (marketing)/        # 营销页面
│   └── api/                # API 路由
├── components/             # 可复用组件
│   ├── ui/                 # UI 组件 (shadcn/ui)
│   ├── auth/               # 认证相关组件
│   └── dashboard/          # 后台管理组件
├── lib/                    # 工具函数和配置
├── styles/                 # 全局样式
└── types/                  # TypeScript 类型定义
```

## 🎨 主题定制

项目使用 Tailwind CSS 进行样式管理，您可以通过修改 `tailwind.config.js` 文件来自定义主题。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request。

## 📄 许可证

[MIT](LICENSE)