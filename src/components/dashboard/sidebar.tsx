'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Home, Users, Package, Settings, LogOut } from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();

  const routes = [
    {
      href: '/dashboard',
      label: '概览',
      icon: Home,
      active: pathname === '/dashboard',
    },
    {
      href: '/dashboard/users',
      label: '用户管理',
      icon: Users,
      active: pathname.startsWith('/dashboard/users'),
    },
    {
      href: '/dashboard/products',
      label: '产品管理',
      icon: Package,
      active: pathname.startsWith('/dashboard/products'),
    },
    {
      href: '/dashboard/settings',
      label: '系统设置',
      icon: Settings,
      active: pathname.startsWith('/dashboard/settings'),
    },
  ];

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="">昊旺智能系统</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                  route.active && 'bg-muted text-primary'
                )}
              >
                <route.icon className="h-4 w-4" />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Button variant="outline" className="w-full gap-2">
            <LogOut className="h-4 w-4" />
            退出登录
          </Button>
        </div>
      </div>
    </div>
  );
}
