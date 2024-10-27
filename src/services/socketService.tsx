import { io } from 'socket.io-client';

const url = process.env.REACT_APP_SOCKET_URL
console.log('url', url)
console.log('All env variables:', process.env);

const socket = io(url);

interface Trade {
  p: string; // Price
  q: string; // Quantity
}

interface KlineData {
  k: {
    o: number; // Open price
    c: number; // Close price
    h: number; // High price
    l: number; // Low price
  };
  // You might need more fields based on your kline data structure
}

export const subscribeToSocketEvents = (
  setTicker: (data: any) => void,
  setDepth: (data: any) => void,
  setTrades: React.Dispatch<React.SetStateAction<Trade[]>>,  // Trade interface updated here
  setKline: (data: KlineData | null) => void,  // Update this type based on your data structure
  setFuturesKline: (data: KlineData | null) => void,  // Update this type based on your data structure
  setAccountData: (data: any) => void
) => {
  socket.on('ticker', setTicker);
  socket.on('depth', setDepth);
  socket.on('trades', (data: Trade) =>
    setTrades((prev: Trade[]) => [data, ...prev.slice(0, 4)])  // Use updated Trade interface here
  );
  socket.on('kline', (data: KlineData) => setKline(data));  // Ensure kline data is formatted correctly
  socket.on('futuresKline', (data: KlineData) => setFuturesKline(data));  // Ensure futuresKline data is formatted correctly
  socket.emit('getAccountData');
  socket.on('accountData', setAccountData);
};


export const unsubscribeFromSocketEvents = () => {
  socket.off('ticker');
  socket.off('depth');
  socket.off('trades');
  socket.off('kline');
  socket.off('futuresKline');
  socket.off('accountData');
};
