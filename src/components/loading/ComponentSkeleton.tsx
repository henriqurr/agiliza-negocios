import React, { ReactNode } from 'react';
import IconifyIcon from '../iconify/IconifyIcon';

import styles from './styles.module.scss';

export default function ComponentSkeleton(): ReactNode {
    return (
        <>
            <div className={styles.loadingWrapper}>
                <IconifyIcon icon='eos-icons:loading' />
            </div>
        </>
    );
}
