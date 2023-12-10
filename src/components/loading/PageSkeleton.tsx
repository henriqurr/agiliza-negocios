import React, { ReactNode } from 'react';

import IconifyIcon from '../iconify/IconifyIcon';
import styles from './styles.module.scss';

export default function PageSkeleton(): ReactNode {
    return (
        <div className={styles.pageLoading}>
            <IconifyIcon icon='eos-icons:loading' />
        </div>
    );
}
