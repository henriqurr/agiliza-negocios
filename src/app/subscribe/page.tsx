import React, { ReactNode } from 'react';

import type { Metadata } from 'next';

import Subscribe from '@/views/subscribe/Subscribe';

export const metadata: Metadata = {
    title: 'AgilizaNegócios - Inscrição',
    description: 'AgilizaNegócios - Inscrição',
};

export default function Page(): ReactNode {
    return <Subscribe />;
}
