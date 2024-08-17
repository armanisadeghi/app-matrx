'use client';

import React, { useState } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import TopMenu from '@/components/dashboard/top-menu';
import LeftSidebar from '@/components/dashboard/left-sidebar';
import RightSidebar from '@/components/dashboard/right-sidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

    const toggleLeftSidebar = () => setLeftSidebarOpen(!leftSidebarOpen);
    const toggleRightSidebar = () => setRightSidebarOpen(!rightSidebarOpen);

    return (
        <ThemeProvider>
            <div className="flex h-screen overflow-hidden bg-background">
                <LeftSidebar isOpen={leftSidebarOpen} />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <TopMenu toggleLeftSidebar={toggleLeftSidebar} />
                    <div className="flex flex-1 overflow-hidden">
                        <main className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${leftSidebarOpen ? 'ml-64' : 'ml-0'} ${rightSidebarOpen ? 'mr-64' : 'mr-0'}`}>
                            <div className="container mx-auto py-6 px-4">
                                {children}
                            </div>
                        </main>
                        <RightSidebar isOpen={rightSidebarOpen} />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
