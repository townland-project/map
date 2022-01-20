import { Colors, ICordination, Positions } from "../database/positions"
import { Item } from "./item"

export const Items = (props: Props) => {
    return (
        <div data-simplebar className="flex flex-col mt-3 h-[78vh] max-h-[78vh] overflow-x-hidden relative">
            {
                Object.keys(Positions)
                    .filter((key) => Positions[key].state === 'sell')
                    .map((key, index) => {
                        const cord = key.split(','), x = parseInt(cord[0]), y = parseInt(cord[1])

                        return (
                            <Item
                                key={index}
                                x={x}
                                y={y}
                                state={Positions[key].state}
                                owner={Positions[key].owner}
                                price={Positions[key].price}
                                color={Colors[Positions[key].state]}
                                onClick={(cord) => props.onClick(cord)}
                            />
                        )
                    })
            }
        </div>
    )
}

interface Props {
    onClick: CordCallback
}

interface CordCallback {
    (cord: ICordination): void
}