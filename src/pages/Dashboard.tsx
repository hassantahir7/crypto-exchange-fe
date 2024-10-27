import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { subscribeToSocketEvents, unsubscribeFromSocketEvents } from '../services/socketService';
import SpotTickerCard from '../components/core/Cards/SpotTickerCard';
import DepthCard from '../components/core/Cards/DepthCard';
import KlineChart from '../components/core/Cards/KlineChart';
import RecentTradesCard from '../components/core/Cards/RecentTradesCard';
import Footer from '../components/core/Footer/Footer';

const Dashboard: React.FC = () => {
  const [ticker, setTicker] = useState<any>(null);
  const [depth, setDepth] = useState<any>(null);
  const [trades, setTrades] = useState<any[]>([]);
  const [kline, setKline] = useState<any>(null);
  const [futuresKline, setFuturesKline] = useState<any>(null);

  useEffect(() => {
    subscribeToSocketEvents(setTicker, setDepth, setTrades, setKline, setFuturesKline);
    return () => unsubscribeFromSocketEvents();
  }, []);

  return (
    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <SpotTickerCard ticker={ticker} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <DepthCard depth={depth} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RecentTradesCard trades={trades} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <KlineChart title="Kline Chart (BTC/USDT)" klineData={kline} lineColor="#4caf50" />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <KlineChart title="Futures Kline Chart (BTC/USDT)" klineData={futuresKline} lineColor="#f44336" />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Dashboard;
