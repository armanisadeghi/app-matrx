import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, X } from 'lucide-react';

const RightSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`fixed right-0 top-0 z-40 h-screen w-64 bg-white transition-transform duration-300 ease-in-out dark:bg-gray-800 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b px-4 py-2">
                    <h2 className="text-lg font-semibold">Assistant</h2>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-4 w-4" />
                    </Button>
                </div>
                <ScrollArea className="flex-1 p-4">
                    {/* Add your assistant content here */}
                    <p>This is where your AI assistant or helpful information can go.</p>
                </ScrollArea>
            </div>
            <Button
                className="fixed right-4 bottom-4 rounded-full"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
            >
                <MessageSquare className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default RightSidebar;
