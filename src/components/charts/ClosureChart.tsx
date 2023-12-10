import React, { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
            formatter: (value: number, context: any) => {
                const total = context.chart.data.datasets[0].data.reduce((acc: number, val: number) => acc + val, 0);
                const percentage = (value / total) * 100;
                return `${percentage.toFixed(2)}%`;
            },
        },
    },
};

const ClosureChart: FC = () => {
    return (
        <Doughnut
            data={{
                labels: ['Fecharam', 'Nunca fecharam'],
                datasets: [
                    {
                        label: 'Fechamento de negócios',
                        data: [52, 48],
                        backgroundColor: ['gold', 'black'],
                    },
                ],
            }}
            options={options}
        />
    );
};

ClosureChart.displayName = 'ClosureChart';

export default ClosureChart;
