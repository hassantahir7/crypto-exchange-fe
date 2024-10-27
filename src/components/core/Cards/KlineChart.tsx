import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import LoadingSpinner from '../../common/Spinner/LoadingSpinner';

// Register required components and scales
Chart.register(...registerables);

interface KlineData {
    o: number; // Open price
    c: number; // Close price
    h: number; // High price
    l: number; // Low price
}

interface KlineChartProps {
    title: string; // Title of the chart
    klineData: KlineData | null; // Kline data, which can be null if not available
    lineColor: string; // Color of the line in the chart
}

const KlineChart: React.FC<KlineChartProps> = ({ title, klineData, lineColor }) => {
    const priceData = klineData ? [
        klineData.o, // Open price
        klineData.h, // High price
        klineData.l, // Low price
        klineData.c  // Close price
    ] : [];

    const maxPrice = Math.max(...priceData);
    const minPrice = Math.min(...priceData);

    const chartData = {
        labels: ['Open', 'High', 'Low', 'Close'],
        datasets: [
            {
                label: 'Price',
                data: priceData,
                borderColor: lineColor,
                backgroundColor: `${lineColor}33`, 
                fill: true,
                tension: 0.4, // Smooth line
                pointStyle: 'circle',
                pointRadius: 4,
                pointHoverRadius: 6,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Price Categories',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Price',
                },
                min: minPrice - 5,
                max: maxPrice + 5,
                ticks: {
                    stepSize: 5,
                },
            },
        },
    };

    return (
        <Card sx={{ height: '100%', boxShadow: 3, borderRadius: '16px' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                {klineData ? (
                    <div style={{ position: 'relative', height: '300px' }}>
                        <Line data={chartData} options={chartOptions} />
                    </div>
                ) : (
                    <LoadingSpinner />
                )}
            </CardContent>
        </Card>
    );
};

export default KlineChart;
