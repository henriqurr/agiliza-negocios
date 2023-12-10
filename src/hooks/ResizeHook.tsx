'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface IWindowSize {
    width: number;
    height: number;
}

interface IScreenProviderProps {
    children: ReactNode;
}

const ScreenContext = createContext<IWindowSize | undefined>(undefined);

export const ScreenProvider: React.FC<IScreenProviderProps> = ({ children }) => {
    const [windowSize, setWindowSize] = useState<IWindowSize>({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.addEventListener('orientationchange', handleResize);
        };
    }, []);

    return <ScreenContext.Provider value={windowSize}>{children}</ScreenContext.Provider>;
};

export const useResize = (): IWindowSize | undefined => {
    return useContext(ScreenContext);
};
