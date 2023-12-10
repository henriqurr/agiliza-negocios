import React, { ComponentProps, FC } from 'react';

import Link from 'next/link';

import styles from './styles.module.scss';
import IconifyIcon from '../iconify/IconifyIcon';

interface ButtonProps extends ComponentProps<'button'> {
    href?: string;
    variant?: 'black' | 'white' | 'border-white' | 'border-black';
    loading?: boolean;
    styleClasses?: string[];
}

const Button: FC<ButtonProps> = ({ href, variant = 'black', loading, styleClasses, ...props }) => {
    return (
        <>
            {href && (
                <Link
                    href={href}
                    className={`
                        ${styles.buttonModule} 
                        ${props.className ?? ''} 
                        ${styleClasses ? styles[styleClasses.join(' ')] : ''}
                        `}
                    data-loading={loading}
                    data-variant={variant}>
                    {props.children}
                </Link>
            )}

            {!href && (
                <button
                    className={`
                    ${styles.buttonModule} 
                    ${props.className ?? ''} 
                    ${styleClasses ? styles[styleClasses.join(' ')] : ''}
                    `}
                    data-loading={loading}
                    data-variant={variant}>
                    {props.children}

                    {loading && (
                        <div className={styles.loadingWrapper}>
                            <IconifyIcon icon='eos-icons:loading' />
                        </div>
                    )}
                </button>
            )}
        </>
    );
};

Button.displayName = 'Button Component';

export default Button;
