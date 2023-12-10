'use client';

import React, { FC, useState, useEffect } from 'react';

// Components
import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/Button';

// Styles
import styles from './styles.module.scss';
import { useResize } from '@/hooks/ResizeHook';
import { useHeaderScroll } from '@/hooks/HeaderHook';

const HeaderNav: FC = () => {
    const windowSize = useResize();
    const scrolled = useHeaderScroll();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (windowSize && windowSize.width && windowSize.width >= 1200) {
            closeMenu();
        }

        if (menuOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [menuOpen, windowSize]);

    return (
        <header className={`${styles.Header}`} id='header' data-scroll={scrolled}>
            <div data-container-fluid>
                <div data-container>
                    <nav className={`${styles.navDefault} ${menuOpen ? styles.menuOpened : ''}`}>
                        <div className={styles.background} onClick={closeMenu}></div>
                        <div className={styles.navMenu}>
                            <Link className={styles.logo} href='/'>
                                <Image
                                    src='/logo.png'
                                    alt='Logo'
                                    className={styles.vercelLogo}
                                    width={100}
                                    height={24}
                                    priority
                                />
                            </Link>

                            <div className={styles.navMobileLinks}>
                                <ul className={styles.navLinks}>
                                    <li>
                                        <Button href='/login' variant='border-white'>
                                            Login
                                        </Button>
                                    </li>
                                    <li>
                                        <Button href='/inscricao' variant='white'>
                                            Inscrição
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.navToggle} onClick={toggleMenu}>
                            <button className={styles.navButton} aria-label='Abrir Menu'>
                                <span className={styles.burguer}></span>
                                <span className={styles.burguer}></span>
                                <span className={styles.burguer}></span>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

HeaderNav.displayName = 'HeaderNav';

export default HeaderNav;
