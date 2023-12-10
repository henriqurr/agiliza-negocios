import React, { ReactNode } from 'react';

import Image from 'next/image';
import dynamic from 'next/dynamic';

// Styles
import styles from './styles.module.scss';
import Button from '@/components/button/Button';
import HeaderNav from '@/components/header-nav/HeaderNav';
import ComponentSkeleton from '@/components/loading/ComponentSkeleton';
import Footer from '@/components/footer/Footer';

export const ClosureChart = dynamic(() => import('@/components/charts/ClosureChart'), {
    ssr: false,
    loading: () => <ComponentSkeleton />,
});

export const InterestChart = dynamic(() => import('@/components/charts/InterestChart'), {
    ssr: false,
    loading: () => <ComponentSkeleton />,
});

export const ReasonChart = dynamic(() => import('@/components/charts/ReasonChart'), {
    ssr: false,
    loading: () => <ComponentSkeleton />,
});

export const SwiperTeam = dynamic(() => import('./Team'), {
    ssr: false,
    loading: () => <ComponentSkeleton />,
});

export default function Home(): ReactNode {
    return (
        <>
            <HeaderNav />

            <section className={styles.bannerSection} data-container-fluid>
                <div data-container>
                    <div className={styles.content}>
                        <div className={styles.information}>
                            <h1>
                                Somos a<br /> AgilizaNegócios
                            </h1>
                            <p>Facilitamos processos para pequenos negócios se conectarem com grandes empresas.</p>

                            <Button href='#entenda' variant='white'>
                                Entenda
                            </Button>
                        </div>

                        <div className={styles.image}>
                            <Image
                                src='/assets/images/banner.jpeg'
                                alt='Banner'
                                className={styles.logo}
                                width={300}
                                height={500}
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.aboutSection} data-container-fluid>
                <div className='anchor' id='entenda'></div>
                <div data-container>
                    <div className={styles.content}>
                        <div className={styles.information}>
                            <h2 className={styles.title}>O que fazemos</h2>
                            <p>
                                Somos uma empresa que fazemos toda a parte burocrática do cadastro e acompanhamento da
                                contratação, para que as microempresas fechem <b>grandes negócios.</b>
                                <br />
                                <br />
                                Microempresas deixam de prestrar serviços para grandes empresas por falta de
                                documentação, conhecimento e coragem para seguir arrisca com documentos e requisições.
                            </p>
                        </div>

                        <div className={styles.image}>
                            <Image
                                src='/assets/images/about.jpg'
                                alt='Banner'
                                className={styles.logo}
                                width={200}
                                height={200}
                                loading='lazy'
                            />
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.information}>
                            <h3 className={styles.title}>Dados captados</h3>
                            <p>
                                Coletamos dados de 32 pessoas, 96% afirmou que gostaria de vender para grandes empresas
                                mas possuem dificuldades e/ou impeditivos para isso.
                            </p>
                        </div>

                        <div className={styles.grid}>
                            <div className={styles.card}>
                                <h6 className={styles.title}>Interesse em Fechar Negócio</h6>

                                <div className={styles.content}>
                                    <InterestChart />
                                </div>
                            </div>

                            <div className={styles.card}>
                                <h6 className={styles.title}>Fechamento de Negócios</h6>

                                <div className={styles.content}>
                                    <ClosureChart />
                                </div>
                            </div>

                            <div className={styles.card}>
                                <h6 className={styles.title}>Motivo</h6>

                                <div className={styles.content}>
                                    <ReasonChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.teamSection}>
                <div data-container-fluid>
                    <div data-container>
                        <div className={styles.content}>
                            <div className={styles.information}>
                                <h4 className={styles.title}>Nosso time</h4>
                                <p>
                                    Possuímos um time sólido e capacitado para lidar com toda a burocrácia do seu
                                    negócio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.swiper}>
                    <SwiperTeam />
                </div>
            </section>

            <Footer />
        </>
    );
}
