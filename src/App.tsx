import { useState } from 'react';
import { Header } from './components/header';
import { Items } from './components/items';
import { Map } from './components/map';
import { Page } from './components/page';
import { Search } from './components/search';
import { ICordination, Colors, Positions } from './database/positions';

function App() {
  const [scale, setScale] = useState<number>(1.0)
  const [cord, setCord] = useState<ICordination | null>(null)
  const [selected, setSelected] = useState<string | null>(null)

  const ZoomIn = () => {
    if (scale <= 2) setScale(scale + 0.02)
  }

  const ZoomOut = () => {
    if (0.5 <= scale) setScale(scale - 0.02)
  }

  const PageAndItems = () => {
    if (selected != null) {
      const cord = selected.split(','), x = parseInt(cord[0]), y = parseInt(cord[1])

      return (
        <Page
          x={x}
          y={y}
          state={Positions[selected].state}
          owner={Positions[selected].owner}
          price={Positions[selected].price}
          color={Colors[Positions[selected].state]}
          onJump={(value) => setCord(value)}
          onClose={() => setSelected(null)}
        />
      )
    }
    else
      return (
        <Items
          onClick={(value) => {
            setCord(value);
            setSelected(`${value?.x},${value?.y}`)
          }}
        />
      )
  }

  return (
    <main className="flex flex-nowrap w-screen h-screen select-none bg-slate-200">

      <div
        style={{
          'minWidth': window.innerWidth / 1.5
        }}
        className="rounded-2xl h-fit overflow-hidden ml-10 relative my-auto mr-2">
        <Map
          tiles={Positions}
          colors={Colors}
          width={window.innerWidth / 1.5}
          height={window.innerHeight - 100}
          size={24}
          backgroundColor="#cbd5e1"
          minScale={0.5}
          maxScale={2}
          scale={scale}
          onScaleChange={(value) => setScale(value)}
          cordination={cord}
          onCordinationChange={(value) => setCord(value)}
          onClick={(value) => {
            if (value) {
              setCord(value);
              setSelected(`${value?.x},${value?.y}`)
            }
          }}
        />

        <div onClick={() => ZoomIn()} className="flex items-center justify-center absolute bottom-16 left-3 mb-1 cursor-pointer w-[45px] h-[45px] bg-cyan-400 text-white text-2xl shadow-xl rounded-2xl z-10 hover:scale-105 active:scale-100">
          +
        </div>
        <div onClick={() => ZoomOut()} className="flex items-center justify-center absolute bottom-3 left-3 cursor-pointer w-[45px] h-[45px] bg-teal-400 text-white text-2xl shadow-xl rounded-2xl z-10 hover:scale-105 active:scale-100">
          -
        </div>
      </div>
      <div className="flex flex-col w-full">
        <Header />
        <Search />
        <PageAndItems />
      </div>
    </main>
  );
}

export default App;
