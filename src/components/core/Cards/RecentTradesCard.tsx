import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Replace with your desired icon
import LoadingSpinner from '../../common/Spinner/LoadingSpinner';

const RecentTradesCard: React.FC<{ trades: any[] }> = ({ trades }) => (
  <Card sx={{ height: '100%', boxShadow: 3, borderRadius: '16px' }}>
    <CardContent>
      <Box display="flex" alignItems="center" mb={2} sx={{ position: 'relative' }}>
        <AccessTimeIcon color="action" sx={{ position: 'absolute', left: 0, fontSize: '2rem', zIndex: 0 }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginLeft: '40px', position: 'relative', zIndex: 1 }}>
          Recent Trades
        </Typography>
      </Box>
      {trades.length > 0 ? (
        <List>
          {trades.map((trade, index) => (
            <ListItem key={index} sx={{ padding: '5.5px 0' }}> {/* Decreased vertical padding */}
              <Typography>
                <strong>Price:</strong> {trade.p}, <strong>Quantity:</strong> {trade.q}
              </Typography>
            </ListItem>
          ))}
        </List>
      ) : <LoadingSpinner />}
    </CardContent>
  </Card>
);

export default RecentTradesCard;
