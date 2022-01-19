export type TTileState = 'vip' | 'normal' | 'sell' | 'disable' | 'road'

export interface ITile {
    price?: number
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


export const Colors: ITaileStateColor = {
    vip: '#0ea5e9',
    normal: '#64748b',
    sell: '#ef4444',
    disable: 'transparent',
    road: '#94a3b8',
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
        state: 'sell',
        price: 1
    },
    '1,1': {
        owner: '0x0000',
        state: 'road'
    },
    '1,2': {
        owner: '0x000',
        state: 'road'
    },
    '1,3': {
        owner: '0x0000',
        state: 'road'
    },
    '2,1': {
        owner: '0x0001',
        state: 'sell',
        price: 3
    },
    '2,-1': {
        owner: '0x0003',
        state: 'normal'
    },
    '2,0': {
        owner: '0x0002',
        state: 'sell',
        price: 2
    },
    '0,2': {
        owner: '0x0001',
        state: 'vip'
    },
    '2,2': {
        owner: '0x0003',
        state: 'sell',
        price: 1
    },
    '2,3': {
        owner: '0x0002',
        state: 'sell',
        price: 3
    }
}