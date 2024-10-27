import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import LoadingSpinner from '../../common/Spinner/LoadingSpinner';

// Register required components and scales
Chart.register(...registerables);

// Ensure the KlineData structure matches your incoming data
interface KlineData {
    k: {
        o: number; // Open price
        c: number; // Close price
        h: number; // High price
        l: number; // Low price
    };
}

interface KlineChartProps {
    title: string; // Title of the chart
    klineData: KlineData | null; // Kline data, which can be null if not available
    lineColor: string; // Color of the line in the chart
}

const KlineChart: React.FC<KlineChartProps> = ({ title, klineData, lineColor }) => {
    console.log('klineData', klineData);
    
    const priceData = klineData ? [
        klineData.k.o, // Open price
        klineData.k.h, // High price
        klineData.k.l, // Low price
        klineData.k.c  // Close price
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
                backgroundColor: `${lineColor}33`, // Semi-transparent color
                fill: true,
                tension: 0.4, // Smooth line
                pointStyle: 'circle', // Point style can be changed (circle, rect, etc.)
                pointRadius: 4, // Size of the points
                pointHoverRadius: 6, // Size of the points on hover
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
                min: minPrice - 5, // Set minimum to slightly below the lowest price for visibility
                max: maxPrice + 5, // Set maximum to slightly above the highest price for visibility
                ticks: {
                    stepSize: 5, // Adjust as needed for better visibility
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
