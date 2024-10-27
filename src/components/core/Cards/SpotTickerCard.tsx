import React from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoIcon from '@mui/icons-material/Info';
import LoadingSpinner from '../../common/Spinner/LoadingSpinner';

const SpotTickerCard: React.FC<{ ticker: any }> = ({ ticker }) => {

  return (
    <Card sx={{ height: '100%', boxShadow: 3, borderRadius: '16px', backgroundColor: '#f9f9f9' }}>
      <CardContent sx={{ textAlign: 'left', padding: '20px' }}>
        <Box display="flex" alignItems="center" mb={2}>
          <TrendingUpIcon color="primary" sx={{ fontSize: '2rem', marginRight: '10px' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Spot Ticker (BTC/USDT)
          </Typography>
        </Box>
        <Divider sx={{ marginBottom: '15px' }} />
        
        {ticker ? (
          <>
            <Typography variant="h5" sx={{ marginBottom: '10px' }}>
              <strong>Price:</strong> ${ticker.price}
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <AccessTimeIcon sx={{ marginRight: '5px', color: 'text.secondary' }} />
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Last updated: Just now
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <InfoIcon sx={{ marginRight: '5px', color: 'text.secondary' }} />
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                This ticker displays the current trading price of Bitcoin against USDT.
              </Typography>
            </Box>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </CardContent>
    </Card>
  );
};

export default SpotTickerCard;
