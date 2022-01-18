import { useState } from 'react';
import { Map } from './components/map';
import { ICordination, ITaileStateColor, Positions } from './database/positions';

function App() {
  const color: ITaileStateColor = {
    vip: '#0ea5e9',
    normal: '#475569',
    sell: '#ef4444',
    disable: 'transparent',
    road: '#94a3b8',
  }
  const [cord, setCord] = useState<ICordination | null>(null)

  return (
    <Map
      tiles={Positions}
      colors={color}
      width={window.innerWidth}
      height={window.innerHeight}
      size={24}
      backgroundColor="#374151"
      cordination={cord}
      onCordinationChange={(value) => setCord(value)}
      onClick={(value) => setCord(value)}
    />
  );
}

export default App;
