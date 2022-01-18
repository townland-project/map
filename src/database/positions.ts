export type TTileState = 'vip' | 'normal' | 'sell' | 'disable' | 'road'

export interface ITile {
    owner: string // owner eth wallet address
    state: TTileState
}

export interface ITileMap {
    [key: string]: ITile
}

export interface ICordination {
    x: number
    y: number
}

export interface ITaileStateColor {
    vip: string
    normal: string
    sell: string
    disable: string
    road: string
}

export const Positions: ITileMap = {
    '-1,-1': {
        owner: '0x0000',
        state: 'road'
    },
    '0,-1': {
        owner: '0x0000',
        state: 'road'
    },
    '1,-1': {
        owner: '0x0000',
        state: 'road'
    },
    '-1,0': {
        owner: '0x0000',
        state: 'vip'
    },
    '0,0': {
        owner: '0x0000',
        state: 'vip'
    },
    '1,0': {
        owner: '0x0000',
        state: 'road'
    },
    '-1,1': {
        owner: '0x0001',
        state: 'normal'
    },
    '0,1': {
        owner: '0x0001',
        state: 'normal'
    },
    '1,1': {
        owner: '0x0000',
        state: 'road'
    },
}