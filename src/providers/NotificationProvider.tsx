'use client';

import React, { createContext, useState, useContext, useCallback, useEffect, ReactNode, FC } from 'react';
import { NotificationProps } from '@/components/notification/types';

interface NotificationContextProps {
    notificationData: NotificationProps;
    setNotification: (data: NotificationProps) => void;
    hideNotification: () => void;
    isVisible: boolean;
}

const NotificationContext = createContext<NotificationContextProps>({
    notificationData: { state: 'hidden', text: '', position: 'bottom' },
    setNotification: () => {},
    hideNotification: () => {},
    isVisible: false,
});

export const useNotification = (): NotificationContextProps => useContext(NotificationContext);

export const NotificationProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [notificationData, setNotificationData] = useState<NotificationProps>({
        state: 'hidden',
        text: '',
        position: 'bottom',
    });
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    const hideNotification = useCallback(() => {
        setIsVisible(false);
        setNotificationData({ state: 'hidden', text: '', position: 'bottom' });
        if (timer) {
            clearTimeout(timer);
        }
    }, [timer]);

    const setNotification = useCallback(
        (data: NotificationProps) => {
            hideNotification();

            setTimeout(() => {
                setNotificationData({ ...data, state: data.state });
                setIsVisible(true);

                const newTimer = setTimeout(() => {
                    hideNotification();
                }, 3000);

                setTimer(newTimer);
            }, 100);
        },
        [hideNotification],
    );

    useEffect(() => {
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [timer]);

    return (
        <NotificationContext.Provider value={{ notificationData, setNotification, hideNotification, isVisible }}>
            {children}
        </NotificationContext.Provider>
    );
};
