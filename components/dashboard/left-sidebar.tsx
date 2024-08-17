import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Home, Users, ShoppingCart, BarChart, Settings } from 'lucide-react';

const sidebarNavItems = [
    {
        title: "Home",
        href: "/dashboard",
        icon: Home,
    },
    {
        title: "Users",
        href: "/dashboard/users",
        icon: Users,
    },
    {
        title: "Products",
        href: "/dashboard/products",
        icon: ShoppingCart,
    },
    {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart,
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

const LeftSidebar = () => {
    const pathname = usePathname();

    return (
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full flex-col">
                <div className="flex h-14 items-center border-b px-4">
                    <Link className="flex items-center space-x-2" href="/">
                        <span className="font-bold">Your Logo</span>
                    </Link>
                </div>
                <ScrollArea className="flex-1 py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        {sidebarNavItems.map((item, index) => (
                            <Link key={index} href={item.href}>
                <span
                    className={cn(
                        "flex items-center rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                        pathname === item.href ? "bg-gray-200 dark:bg-gray-800" : "transparent",
                        "my-1"
                    )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </span>
                            </Link>
                        ))}
                    </nav>
                </ScrollArea>
            </div>
        </div>
    );
};

export default LeftSidebar;
