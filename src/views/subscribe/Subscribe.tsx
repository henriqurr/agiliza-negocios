import React, { ReactNode } from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import ComponentSkeleton from '@/components/loading/ComponentSkeleton';

// Styles
import styles from './styles.module.scss';

const FormSing = dynamic(() => import('@/components/forms/sing/FormSing'), {
    loading: () => <ComponentSkeleton />,
});

export default function Subscribe(): ReactNode {
    return (
        <section className={styles.initialApplication}>
            <div className={styles.content}>
                <Image src='/logo.png' alt='Logo' className={styles.vercelLogo} width={100} height={24} priority />
                <FormSing />
            </div>
        </section>
    );
}
