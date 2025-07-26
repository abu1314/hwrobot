import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          欢迎使用好望智能管理系统
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          企业级应用解决方案
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/login">登录</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/register">注册</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
