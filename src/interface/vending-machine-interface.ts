export interface IProducts {
    slot: number,
    name: string,
    quantity: number,
    price: number
}

export interface IBuy {
    slot: number,
    price: Array<number>,
    quantity: number
}

export enum ICoin {
    fiveCent = 5,
    tenCent = 10,
    twentyfiveCent = 25,
    fiftyCent = 50
}

export interface IHandler {
    error: number,
    detail: string
}

export interface IMachineCoin {
    coins: Array<number>
}

export interface IUpdateProduct {
    price: number,
    quantity: number
}
