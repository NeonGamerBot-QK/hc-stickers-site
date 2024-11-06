import { Stickers } from "../App";
import StickerGrid from "./StickerGrid";

export default function Grid({ data }: { data: Stickers }) {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.map((sticker) => {
                return <StickerGrid data={sticker} />
            })}
        </div>
    )
}