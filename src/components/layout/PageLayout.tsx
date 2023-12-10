import React, { ReactNode } from 'react';

import { NotificationProvider } from '@/providers/NotificationProvider';
import { ScreenProvider } from '@/hooks/ResizeHook';
import { HeaderScrollProvider } from '@/hooks/HeaderHook';

export default function PageLayout({ children }: { children: ReactNode }): ReactNode {
    return (
        <NotificationProvider>
            <ScreenProvider>
                <HeaderScrollProvider>
                    <main>{children}</main>
                </HeaderScrollProvider>
            </ScreenProvider>
        </NotificationProvider>
    );
}
