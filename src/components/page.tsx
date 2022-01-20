import { ICordination, ITile } from "../database/positions";

export const Page = (props: Props) => {
    return (
        <div className="flex flex-col py-2 h-[79vh]">
            <div className="flex flex-nowrap items-center">
            </div>
            <div
                style={{ 'backgroundColor': props.color }}
                className="flex flex-col w-full h-[200px] items-center justify-center rounded-lg shadow-md relative">
                <div className="w-[24px] h-[24px] -mt-4 bg-location bg-contain bg-center bg-no-repeat"></div>

                <span className="text-sm text-white/60 absolute bottom-2">
                    {props.x},{props.y}
                </span>
            </div>

            <button onClick={() => props.onJump({ x: props.x, y: props.y })} className='py-2 mt-1 rounded-lg w-full text-center text-white bg-lime-500'>Jump In</button>


            <span className='text-gray-600 text-ms mt-4'>Owner</span>
            <span className='text-gray-800 text-xl'>{props.owner}</span>
            {
                props.price ?
                    <>
                        <span className='text-gray-600 text-ms mt-5'>Price</span>
                        <span className='text-gray-800 text-xl'>{props.price} <sub className='text-xs relative top-0'>TOWL</sub></span>

                        <div className="flex-1"></div>
                        <button className='py-2 mt-8 rounded-lg w-full text-center text-white bg-amber-500'>Buy</button>
                    </> :
                    <div className="flex-1"></div>
            }
            <button onClick={() => props.onClose()} className="mt-2 py-2 rounded-lg w-full text-center text-white bg-violet-500">Back & Close</button>
        </div>
    )
}

interface Props extends ITile, ICordination {
    color: string
    onJump: JumpCallback
    onClose: VoidCallback
}

interface JumpCallback {
    (cord: ICordination): void
}

interface VoidCallback {
    (): void
}