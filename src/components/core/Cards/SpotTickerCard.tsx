import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LoadingSpinner from '../../common/Spinner/LoadingSpinner';

const SpotTickerCard: React.FC<{ ticker: any }> = ({ ticker }) => (
  <Card sx={{ height: '100%', boxShadow: 3, borderRadius: '16px' }}>
    <CardContent sx={{ textAlign: 'left' }}> {/* Set text alignment to left */}
      <Box display="flex" alignItems="center" mb={2}>
        <TrendingUpIcon color="primary" sx={{ fontSize: '2rem', marginRight: '10px' }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Spot Ticker (BTC/USDT)
        </Typography>
      </Box>
      {ticker ? (
        <>
          <Typography variant="h5" sx={{ marginBottom: '10px' }}>
            <strong>Price:</strong> {ticker.c}
          </Typography>
          <Typography sx={{ marginBottom: '13px' }}>
            <strong>Change:</strong> {ticker.P}%
          </Typography>
          <Typography sx={{ marginBottom: '13px' }}>
            <strong>Volume:</strong> {ticker.v}
          </Typography>
          <Typography sx={{ marginBottom: '13px' }}>
            <strong>High:</strong> {ticker.h}
          </Typography>
          <Typography sx={{ marginBottom: '13px' }}>
            <strong>Low:</strong> {ticker.l}
          </Typography>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </CardContent>
  </Card>
);

export default SpotTickerCard;
