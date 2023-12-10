'use client';

import React, { createContext, useState, useContext, useCallback, useEffect, ReactNode, FC } from 'react';
import { NotificationProps } from '@/components/notification/types';

interface NotificationContextProps {
    notificationData: NotificationProps;
    setToast: (data: NotificationProps) => void;
    hideToast: () => void;
    isVisible: boolean;
}

const NotificationContext = createContext<NotificationContextProps>({
    notificationData: { state: 'hidden', text: '', position: 'bottom' },
    setToast: () => {},
    hideToast: () => {},
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

    const hideToast = useCallback(() => {
        setIsVisible(false);
        setNotificationData({ state: 'hidden', text: '', position: 'bottom' });
        if (timer) {
            clearTimeout(timer);
        }
    }, [timer]);

    const setToast = useCallback(
        (data: NotificationProps) => {
            hideToast();

            setTimeout(() => {
                setNotificationData({ ...data, state: data.state });
                setIsVisible(true);

                const newTimer = setTimeout(() => {
                    hideToast();
                }, 3000);

                setTimer(newTimer);
            }, 100);
        },
        [hideToast],
    );

    useEffect(() => {
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [timer]);

    return (
        <NotificationContext.Provider value={{ notificationData, setToast, hideToast, isVisible }}>
            {children}
        </NotificationContext.Provider>
    );
};
