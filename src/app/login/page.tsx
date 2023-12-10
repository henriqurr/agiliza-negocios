import React, { ReactNode } from 'react';

import type { Metadata } from 'next';

import Login from '@/views/login/Login';

export const metadata: Metadata = {
    title: 'AgilizaNegócios - Login',
    description: 'AgilizaNegócios - Login',
};

export default function Page(): ReactNode {
    return <Login />;
}
