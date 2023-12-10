import React, { ComponentProps, FC } from 'react';

import styles from './styles.module.scss';

interface LinkProps extends ComponentProps<'a'> {}

const Link: FC<LinkProps> = ({ ...props }) => {
    return (
        <>
            <a {...props} className={styles.linkModule}>
                {props.children}
            </a>
        </>
    );
};

Link.displayName = 'Link Component';

export default Link;
