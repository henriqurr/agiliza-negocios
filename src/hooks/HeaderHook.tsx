'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode, FC } from 'react';

interface IHeaderScrollProviderProps {
    children: ReactNode;
}

const HeaderScrollContext = createContext<boolean>(false);

export const HeaderScrollProvider: FC<IHeaderScrollProviderProps> = ({ children }) => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;

            if (scrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return <HeaderScrollContext.Provider value={scrolled}>{children}</HeaderScrollContext.Provider>;
};

export const useHeaderScroll = (): boolean => {
    return useContext(HeaderScrollContext);
};
