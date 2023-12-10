'use client';

import { useEffect, useState, useCallback } from 'react';

interface SideSpacing {
    left: string;
    right: string;
}

const useSideSpacing = (): SideSpacing => {
    const [spacing, setSpacing] = useState<SideSpacing>({
        left: '',
        right: '',
    });

    const debounce = <F extends (...args: unknown[]) => unknown>(func: F, delay: number) => {
        let timerId: ReturnType<typeof setTimeout>;
        return (...args: Parameters<F>) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => func(...args), delay);
        };
    };

    const updateSpacing = useCallback(() => {
        const containerElement = document.querySelector('[data-container]');
        if (containerElement) {
            const computedStyles = getComputedStyle(containerElement);
            const leftPadding = parseFloat(computedStyles.paddingLeft.replace('px', ''));
            const leftMargin = parseFloat(computedStyles.marginLeft.replace('px', ''));
            const rightPadding = parseFloat(computedStyles.paddingRight.replace('px', ''));
            const rightMargin = parseFloat(computedStyles.marginRight.replace('px', ''));
            const leftTotal = leftPadding + leftMargin + 12;
            const rightTotal = rightPadding + rightMargin + 12;

            setSpacing({
                left: `${leftTotal}px`,
                right: `${rightTotal}px`,
            });
        }
    }, []);

    const debouncedUpdateSpacing = debounce(updateSpacing, 300);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            updateSpacing();
            window.addEventListener('resize', debouncedUpdateSpacing);
            window.addEventListener('orientationchange', debouncedUpdateSpacing);

            return () => {
                window.removeEventListener('resize', debouncedUpdateSpacing);
                window.removeEventListener('orientationchange', debouncedUpdateSpacing);
            };
        }
    }, [debouncedUpdateSpacing, updateSpacing]);

    return spacing;
};

export default useSideSpacing;
