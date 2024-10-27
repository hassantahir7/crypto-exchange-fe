import { io } from 'socket.io-client';

const url = process.env.REACT_APP_SOCKET_URL

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
}

export const subscribeToSocketEvents = (
  setTicker: (data: any) => void,
  setDepth: (data: any) => void,
  setTrades: React.Dispatch<React.SetStateAction<Trade[]>>,  
  setKline: (data: KlineData | null) => void,  
  setFuturesKline: (data: KlineData | null) => void,  
  setAccountData: (data: any) => void
) => {
  socket.on('ticker', setTicker);
  socket.on('depth', setDepth);
  socket.on('trades', (data: Trade) =>
    setTrades((prev: Trade[]) => [data, ...prev.slice(0, 4)])  
  );
  socket.on('kline', (data: KlineData) => setKline(data));  
  socket.on('futuresKline', (data: KlineData) => setFuturesKline(data));  
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
