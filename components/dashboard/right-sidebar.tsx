'use client';

import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface RightSidebarProps {
    isOpen: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isOpen }) => {
    return (
        <div className={cn(
            "fixed right-0 top-14 z-30 h-[calc(100vh-3.5rem)] w-64 border-l bg-background transition-all duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
        )}>
            <ScrollArea className="h-full">
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-4">Assistant</h2>
                    <p>This is where your AI assistant or helpful information can go.</p>
                </div>
            </ScrollArea>
        </div>
    );
};

export default RightSidebar;
