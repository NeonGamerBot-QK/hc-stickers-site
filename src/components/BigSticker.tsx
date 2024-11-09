import { Sticker } from "../App";
import Tilt from 'react-parallax-tilt';
import { communityDescriptions } from "../community";
export default function BigSticker({ data }: { data?: Sticker }) {
if(!data) return <div>
    <h1 className="text-5xl font-bold mb-5">404: Sticker not found</h1>
    <button onClick={() => window.history.back()} className="btn btn-primary btn-xl">Go Back</button>
</div>
return  <div className="card bg-base-100  shadow-xl">
    <figure className="mt-10">
  <Tilt>
  <img
        src={data.picture}
        alt={data.name} className="max-w-40 max-h-40" />
  </Tilt>
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {data.name}
        {/* <div className="badge badge-secondary">NEW</div> */}
      </h2>
      <p>Stock: {data.stock}</p>
      <p>
          {communityDescriptions[data.sku] ? communityDescriptions[data.sku]()  : "No community description found, maybe add one?"}
        </p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">start: {data.start}</div>
        <div className="badge badge-outline">end: {data.end}</div>
        
      </div>
    </div>
</div>
}