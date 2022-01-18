import { Stage, Layer, Rect, Text, Image } from 'react-konva'
import { ICordination, ITaileStateColor, ITileMap, TTileState } from '../database/positions'
import useImage from 'use-image';
import { useState } from 'react';

export const Map = (props: Props) => {
    const [scale, setScale] = useState<number>(1.0)
    const [locationImage] = useImage(`${process.env.PUBLIC_URL}/assets/location.png`)

    const OnWheel = (e: any) => {
        e.evt.preventDefault();

        const scaleBy = 1.02;
        const stage = e.target.getStage();
        const oldScale = stage.scaleX();
        // const mousePointTo = {
        //     x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
        //     y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
        // };

        const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

        setScale(
            newScale
        )

        // this.setState({
        //     stageScale: newScale,
        //     stageX:
        //         -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
        //     stageY:
        //         -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
        // });
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
            scaleX={scale}
            scaleY={scale}
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
                                onClick={() => {
                                    props.onClick(state === 'disable' ? null : { x, y })
                                }}
                                onMouseEnter={() => props.onCordinationChange(state === 'disable' ? null : { x, y })}
                            />
                        )
                    })
                }
            </Layer>
            <Layer>
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
    cordination: ICordination | null
    onCordinationChange: ICordinationCallback
    onClick: ICordinationCallback
}

interface ICordinationCallback {
    (cord: ICordination | null): void
}