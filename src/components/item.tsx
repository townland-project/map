import { ITile, ICordination } from '../database/positions'

export const Item = (props: Props) => {
    return (
        <div
            onClick={() => props.onClick({ x: props.x, y: props.y })}
            className="flex flex-col cursor-pointer bg-white pl-4 pr-1 py-3 mb-3 mt-1 shadow-md rounded-lg">
            <div className="flex flex-nowrap">
                <div className="flex flex-col">
                    <div
                        style={{ 'backgroundColor': props.color }}
                        className="flex flex-col min-w-[100px] w-[100px] h-[100px] items-center justify-center rounded-lg shadow-md relative">
                        <div className="w-[24px] h-[24px] -mt-4 bg-location bg-contain bg-center bg-no-repeat"></div>

                        <span className="text-sm text-white/60 absolute bottom-2">
                            {props.x},{props.y}
                        </span>
                    </div>
                </div>

                <div className='mx-4 w-full flex flex-col'>
                    <span className='text-gray-600 text-xs'>Price</span>
                    <span className='text-gray-800'>{props.price} <sub className='text-xs relative top-0'>TOWL</sub></span>
                    <span className='text-gray-600 text-xs mt-2'>Owner</span>
                    <span className='text-gray-800'>{props.owner}</span>
                </div>
            </div>
        </div>
    )
}

interface Props extends ITile, ICordination {
    color: string
    onClick: CordCallback
}

interface CordCallback {
    (cord: ICordination): void
}