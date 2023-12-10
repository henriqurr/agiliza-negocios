import React, { ReactNode } from 'react';

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import PageSkeleton from '@/components/loading/PageSkeleton';

// import Login from '@/views/login/Login';

export const metadata: Metadata = {
    title: 'AgilizaNegócios - Login',
    description: 'AgilizaNegócios - Login',
};

const Login = dynamic(() => import('@/views/login/Login'), {
    ssr: false,
    loading: () => <PageSkeleton />,
});

export default function Page(): ReactNode {
    return <Login />;
}
