import { ITile, ICordination } from '../database/positions'

export const Item = (props: Props) => {
    return (
        <div
            onClick={() => props.onClick({ x: props.x, y: props.y })}
            className="flex lg:flex-nowrap cursor-pointer bg-white pl-4 pr-1 py-3 mb-3 mt-1 border-2 border-solid border-slate-200 shadow-md rounded-lg">
            <div
                style={{ 'backgroundColor': props.color }}
                className="flex flex-col min-w-[65px] w-[65px] h-[65px] lg:min-w-[100px] lg:w-[100px] lg:h-[100px] items-center justify-center rounded-lg shadow-md relative">
                <div className="w-[24px] h-[24px] -mt-4 bg-location bg-contain bg-center bg-no-repeat"></div>

                <span className="text-sm text-white/60 absolute bottom-2">
                    {props.x},{props.y}
                </span>
            </div>

            <div className='mx-4 w-full flex flex-col'>
                <span className='text-gray-600 text-[12px] lg:text-xs'>Price</span>
                <span className='text-gray-800 text-[14px] lg:text-sm'>{props.price} <sub className='text-xs relative top-0'>TOWL</sub></span>
                <span className='text-gray-600 text-[12px] lg:text-xs mt-2'>Owner</span>
                <span className='text-gray-800 text-[14px] lg:text-sm'>{props.owner}</span>
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