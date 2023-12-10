'use client';

import React, { FC } from 'react';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem, ChartOptions } from 'chart.js';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: function (context: TooltipItem<'doughnut'>) {
                    let label = context.label || '';

                    if (label) {
                        label += ': ';
                    }

                    if (context.parsed !== null) {
                        const value = context.parsed as number;
                        const percentage = (value / 100) * 100;
                        label += `${percentage.toFixed(2)}%`;
                    }
                    return label;
                },
            },
        },
        datalabels: {
            color: '#FFF',
            textAlign: 'center',
            font: {
                size: 16,
                weight: 'bold',
            },
            // formatter: (value: number, context: any) => {
            //     const total = context.chart.data.datasets[0].data.reduce((acc: number, val: number) => acc + val, 0);
            //     const percentage = (value / total) * 100;
            //     return percentage.toFixed(2) + '%';
            // },
            formatter: (value: number, context: Context) => {
                const data = context.chart.data.datasets[0].data as number[];
                const total = data.reduce((acc: number, val: number) => acc + val, 0);
                const percentage = (value / total) * 100;
                return `${percentage.toFixed(2)}%`;
            },
        },
    },
};

const InterestChart: FC = () => {
    return (
        <Doughnut
            data={{
                labels: ['Tem interesse', 'Não tem interesse'],
                datasets: [
                    {
                        label: 'Interesse em fechar negócio',
                        data: [96, 4], // Assumindo que os 4% representam o restante até 100%
                        backgroundColor: ['goldenrod', 'black'],
                    },
                ],
            }}
            options={options}
        />
    );
};

InterestChart.displayName = 'InterestChart';

export default InterestChart;
