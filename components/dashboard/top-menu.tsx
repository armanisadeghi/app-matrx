'use client';

import React from 'react';
import { Bell, Search, Settings, Sun, Moon, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserNav } from '@/components/user-nav';
import { useTheme } from '@/components/ThemeProvider';

interface TopMenuProps {
    toggleLeftSidebar: () => void;
}

const TopMenu: React.FC<TopMenuProps> = ({ toggleLeftSidebar }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-14 items-center">
                <Button
                    variant="ghost"
                    size="icon"
                    className="mr-2 md:hidden"
                    onClick={toggleLeftSidebar}
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
                <div className="flex items-center space-x-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hidden md:inline-flex"
                        onClick={toggleLeftSidebar}
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                    <h2 className="text-sm font-semibold">Dashboard</h2>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="md:w-[300px] lg:w-[400px] h-8 text-sm hidden md:inline-flex"
                    />
                    <Button size="icon" variant="ghost">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <Button size="icon" variant="ghost" onClick={toggleTheme}>
                        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                    <UserNav />
                </div>
            </div>
        </header>
    );
};

export default TopMenu;
