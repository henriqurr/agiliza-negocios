import React, { ReactNode } from 'react';

import type { Metadata } from 'next';

import PageSkeleton from '@/components/loading/PageSkeleton';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
    title: 'AgilizaNegócios - Inscrição',
    description: 'AgilizaNegócios - Inscrição',
};

const Subscribe = dynamic(() => import('@/views/subscribe/Subscribe'), {
    ssr: false,
    loading: () => <PageSkeleton />,
});

export default function Page(): ReactNode {
    return <Subscribe />;
}
