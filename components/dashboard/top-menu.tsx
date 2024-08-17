import React from 'react';
import { Bell, Search, Settings, Sun, Moon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserNav } from '@/components/user-nav';
import { useTheme } from '@/components/ThemeProvider';

const TopMenu = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <h2 className="text-lg font-semibold">Dashboard</h2>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="md:w-[300px] lg:w-[400px]"
                        />
                    </div>
                    <Button size="icon" variant="ghost">
                        <Bell className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                        <Settings className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={toggleTheme}>
                        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                    <UserNav />
                </div>
            </div>
        </header>
    );
};

export default TopMenu;
