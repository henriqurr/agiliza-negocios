import React, { FC } from 'react';

import Image from 'next/image';

// Styles
import styles from './styles.module.scss';
import IconifyIcon from '../iconify/IconifyIcon';

const Footer: FC = () => {
    return (
        <footer className={styles.footer} data-container-fluid>
            <div data-container>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <Image src='/logo.png' alt='Logo' width={100} height={24} priority />
                    </div>

                    <div>
                        <a href='https://wa.me/+5549985058797' className={styles.link} target='_blank' rel='noreferrer'>
                            <IconifyIcon icon='ic:baseline-whatsapp' />
                            Fale conosco
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterMemo = React.memo(Footer);

export default FooterMemo;
