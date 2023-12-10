'use client';

import React from 'react';

import IconifyIcon from '@/components/iconify/IconifyIcon';

import { useNotification } from '@/providers/NotificationProvider';

import styles from './styles.module.scss';

const Notification: React.FC = () => {
    const { notificationData, isVisible } = useNotification();

    if (!isVisible || notificationData.state === 'hidden' || notificationData.text === '') {
        return null;
    }

    return (
        <div
            className={`${styles.notificationWrapper} ${notificationData.state ? styles[notificationData.state] : ''} ${
                styles.visible
            } ${styles[notificationData.position ?? 'bottom']}`}>
            {notificationData.state !== 'warning' && (
                <div className={styles.iconWrapper}>
                    {notificationData.state === 'success' && (
                        <IconifyIcon icon='line-md:circle-to-confirm-circle-transition' />
                    )}
                    {notificationData.state === 'error' && <IconifyIcon icon='line-md:close-circle' />}
                </div>
            )}

            {notificationData.text}
        </div>
    );
};

Notification.displayName = 'Notification';

export default Notification;
