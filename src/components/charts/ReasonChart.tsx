'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const options: ChartOptions = {
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
            formatter: (value: any, context: any) => {
                const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                const percentage = (value / total) * 100;
                return percentage.toFixed(2) + '%';
            },
        },
    },
};

export const ReasonChart: React.FC = () => {
    return (
        <Doughnut
            data={{
                labels: ['Estrutura microempresa', 'Falta de tempo para análise'],
                datasets: [
                    {
                        label: 'Motivo',
                        data: [28, 68],
                        backgroundColor: ['gold', 'black'],
                    },
                ],
            }}
            options={options}
        />
    );
};

ReasonChart.displayName = 'ReasonChart';

export default ReasonChart;
