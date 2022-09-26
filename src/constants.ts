import { IHandler } from "./interface/vending-machine-interface";

export const outOfStock: IHandler = {
    error: 400,
    detail: 'Out of stock'
}

export const inSufficientMoney: IHandler = {
    error: 400,
    detail: 'Not enough money to process the transaction'
}