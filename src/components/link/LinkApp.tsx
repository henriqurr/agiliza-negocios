import React, { FC } from 'react';

import Link from 'next/link';

import { LinkProps } from 'next/link';

import styles from './styles.module.scss';

const LinkApp: FC<LinkProps> = ({ ...props }) => {
    return (
        <>
            <Link {...props} className={styles.linkModule}></Link>
        </>
    );
};

LinkApp.displayName = 'LinkApp Component';

export default LinkApp;
