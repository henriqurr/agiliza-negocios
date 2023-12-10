'use client';

import React, { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import styles from './team.module.scss';
import useSideSpacing from '@/hooks/SpacingHook';

interface TeamProps {
    name: string;
    role: string;
    image: string;
}

const team: TeamProps[] = [
    {
        name: 'Henrique Rodrigues',
        role: 'Developer',
        image: '/assets/images/henrique.jpeg',
    },
    {
        name: 'Diego Simonetti',
        role: 'Negócios',
        image: '/assets/images/diego.jpeg',
    },
    {
        name: 'Daniela',
        role: 'Negócios',
        image: '/assets/images/daniela.jpeg',
    },
    {
        name: `Giuliano D'Avila`,
        role: 'Negócios',
        image: '/assets/images/giuliano.jpeg',
    },
    {
        name: `Alisson Melo`,
        role: 'Negócios',
        image: '/assets/images/alisson.jpeg',
    },
];

const SwiperTeam: FC = () => {
    const spacing = useSideSpacing();

    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                modules={[FreeMode, Autoplay]}
                freeMode
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                style={{ paddingLeft: spacing.left, paddingRight: spacing.right }}>
                <div data-container-fluid>
                    <div data-container>
                        {team.map((people) => (
                            <SwiperSlide key={people.name}>
                                <div className={styles.card}>
                                    <div className={styles.image}>
                                        <Image
                                            src={people.image}
                                            alt={people.name}
                                            width={200}
                                            height={200}
                                            quality={100}
                                            priority
                                        />
                                    </div>

                                    <div className={styles.information}>
                                        <span className={styles.name}>{people.name}</span>
                                        <span className={styles.role}>{people.role}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </div>
            </Swiper>
        </>
    );
};

SwiperTeam.displayName = 'Swiper Team';

export default SwiperTeam;
