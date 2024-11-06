import React, { useEffect, useState } from 'react';
import Grid from './components/Grid';
import BigSticker from './components/BigSticker';
export interface Sticker {
  name: string;
  sku: string;
  picture: string;
  stock: number;
  start: number;
  end: number;
}
export type Stickers = Sticker[];
function App() {
  const [stickers, setStickers] = React.useState<Stickers>([]);
const [path,setPath] = useState<string>(window.location.hash.substring(1))
  useEffect(() => {
    fetch("https://arcade-stickers.hackclub.dev/api/skus/all")
    .then(response => response.json()).then(d => setStickers(d.items))
  }, [setStickers])
  useEffect(() => {
window.addEventListener('hashchange', () => {
  setPath(window.location.hash.substring(1))
})
  })

  return (
<div className="hero min-h-screen" style={{ background: "var(--crust)"}}>
  <div className="hero-content text-center">
    <div className="">
 {path.length < 2 ? <div>
  <h1 className="text-5xl font-bold mb-5">Stickers :P</h1>
{stickers.length >0 ? <div>
<Grid data={stickers} />
</div>:       <p className="py-6">
  <span className="loading loading-spinner loading-lg"></span>
</p>
}
 </div> :<div>
 {stickers.length >0 ? <div>
<BigSticker data={stickers.find(s => s.sku === path)} />
</div>:       <p className="py-6">
  <span className="loading loading-spinner loading-lg"></span>
</p>
}
 </div> }
    </div>
  </div>
</div>
  );
}

export default App;
