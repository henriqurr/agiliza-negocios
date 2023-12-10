import React, { ReactNode } from 'react';

import type { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';

// Styles
import '@styles/index.scss';

export const metadata: Metadata = {
    title: 'Nós somos a AgilizaNegócios',
    description: 'AgilizaNegócios',
};

export default function RootLayout({ children }: { children: ReactNode }): ReactNode {
    return (
        <html lang='pt-BR'>
            <body>
                <PageLayout>{children}</PageLayout>
            </body>
        </html>
    );
}
