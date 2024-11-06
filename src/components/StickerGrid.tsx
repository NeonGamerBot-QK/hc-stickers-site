import { Sticker,  } from "../App";
import Tilt from 'react-parallax-tilt';
export default function StickerGrid({ data }: { data: Sticker }) {
return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
  <Tilt>
  <img
        src={data.picture}
        alt={data.name} />
  </Tilt>
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {data.name}
        {/* <div className="badge badge-secondary">NEW</div> */}
      </h2>
      <p>Stock: {data.stock}</p>
      <button className="btn btn-primary" onClick={() => window.location.hash = "#"+data.sku}>Overview</button>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">start: {data.start}</div>
        <div className="badge badge-outline">end: {data.end}</div>
      </div>
    </div>
  </div>
)
}