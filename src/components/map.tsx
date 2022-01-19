import { Stage, Layer, Rect, Text, Image } from 'react-konva'
import { ICordination, ITaileStateColor, ITileMap, TTileState } from '../database/positions'
import useImage from 'use-image';

export const Map = (props: Props) => {
    const [locationImage] = useImage(`${process.env.PUBLIC_URL}/assets/location.png`)

    const OnWheel = (e: any) => {
        e.evt.preventDefault();

        const scaleBy = 1.02;
        const stage = e.target.getStage()
        const oldScale = stage.scaleX()

        const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

        if (props.minScale <= newScale && newScale <= props.maxScale)
            props.onScaleChange(newScale)
    }

    const Cordination = () => {
        const text = `${props.cordination?.x},${props.cordination?.y}`
        const state: TTileState = props.tiles[text].state

        return (
            <>
                <Rect
                    x={props.cordination!.x * props.size}
                    y={props.cordination!.y * props.size}
                    width={props.size}
                    height={props.size}
                    stroke="#e2e8f0"
                    onMouseUp={() =>
                        props.onClick((state === 'disable' || state === 'road') ? null : { x: props.cordination!.x, y: props.cordination!.y })
                    }
                    strokeWidth={2}
                />

                <Rect
                    x={(props.cordination!.x * props.size) + (props.size * 2) + 4}
                    y={props.cordination!.y * props.size}
                    width={120}
                    height={82}
                    fill='#1e293b'
                    shadowBlur={2}
                    cornerRadius={4}
                />

                <Rect
                    x={(props.cordination!.x * props.size) + (props.size * 2) + 12}
                    y={props.cordination!.y * props.size + 5}
                    width={120 - 14}
                    height={28}
                    fill={props.colors[state]}
                    shadowBlur={2}
                    cornerRadius={4}
                />

                <Image
                    x={(props.cordination!.x * props.size) + (props.size * 2) + 16}
                    y={(props.cordination!.y * props.size) + 11}
                    width={16}
                    height={16}
                    image={locationImage}
                />

                <Text
                    x={(props.cordination!.x * props.size) + (props.size * 2) + 16 + 20}
                    y={(props.cordination!.y * props.size) + 12}
                    fontSize={15}
                    text={text}
                    fill="#ffffff"
                />

                <Text
                    x={(props.cordination!.x * props.size) + (props.size * 2) + 12}
                    y={(props.cordination!.y * props.size) + 45}
                    text="Owner"
                    fill="#64748b"
                />

                <Text
                    x={(props.cordination!.x * props.size) + (props.size * 2) + 12}
                    y={(props.cordination!.y * props.size) + 62}
                    text={props.tiles[text].owner.slice(0, 8)}
                    fill="#ffffff"
                />
            </>
        )
    }

    return (
        <Stage
            style={{
                'backgroundColor': props.backgroundColor
            }}
            width={props.width}
            height={props.height}
            scaleX={props.scale}
            scaleY={props.scale}
            offsetX={(props.width / 2) * -1}
            offsetY={(props.height / 2) * -1}
            draggable={true}
            onMouseLeave={() => props.onCordinationChange(null)}
            onWheel={(e) => OnWheel(e)}
        >
            <Layer>
                {
                    Object.keys(props.tiles).map((key, index) => {
                        const state: TTileState = props.tiles[key].state
                        const cord = key.split(','), x = parseInt(cord[0]), y = parseInt(cord[1])

                        return (
                            <Rect
                                key={index}
                                x={x * props.size}
                                y={y * props.size}
                                width={props.size}
                                height={props.size}
                                fill={props.colors[state]}
                                onMouseOver={() =>
                                    props.onCordinationChange((state === 'disable' || state === 'road') ? null : { x, y })
                                }
                            />
                        )
                    })
                }
                {
                    props.cordination ? <Cordination /> : <></>
                }
            </Layer>
        </Stage >
    )
}

interface Props {
    tiles: ITileMap
    colors: ITaileStateColor
    width: number
    height: number
    backgroundColor: string
    size: number
    minScale: number
    maxScale: number
    scale: number
    onScaleChange: IScaleCallback
    cordination: ICordination | null
    onCordinationChange: ICordinationCallback
    onClick: ICordinationCallback
}

interface ICordinationCallback {
    (cord: ICordination | null): void
}

interface IScaleCallback {
    (scale: number): void
}