import React, { FC } from 'react';

import Image from 'next/image';
import Button from '../button/Button';

// Styles
import styles from './styles.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.header} data-container-fluid>
            <div data-container>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <Image
                            src='/logo.png'
                            alt='Logo'
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </div>

                    <div className={styles.links}>
                        <Button href='/inscricao' variant='white'>
                            Entre em contato
                        </Button>

                        <Button href='/login' variant='border-white'>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.displayName = 'Header Component';

export default Header;
