import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import TopMenu from '@/components/dashboard/top-menu';
import LeftSidebar from '@/components/dashboard/left-sidebar';
import RightSidebar from '@/components/dashboard/right-sidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <ThemeProvider>
            <div className="flex h-screen overflow-hidden bg-background">
                <LeftSidebar />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <TopMenu />
                    <main className="flex-1 overflow-y-auto p-4">
                        {children}
                    </main>
                </div>
                <RightSidebar />
            </div>
            <Toaster />
        </ThemeProvider>
    );
}
