import React, { ReactNode } from 'react';

import { NotificationProvider } from '@/providers/NotificationProvider';
import { ScreenProvider } from '@/hooks/ResizeHook';
import { HeaderScrollProvider } from '@/hooks/HeaderHook';
import Notification from '../notification/Notification';

export default function PageLayout({ children }: { children: ReactNode }): ReactNode {
    return (
        <NotificationProvider>
            <ScreenProvider>
                <HeaderScrollProvider>
                    <main>{children}</main>
                    <Notification />
                </HeaderScrollProvider>
            </ScreenProvider>
        </NotificationProvider>
    );
}
