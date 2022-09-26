import { ICoin } from "src/interface/vending-machine-interface";


export function getTotalCoins(price: Array<number>): number {
    let total: number = 0;
    total = total + price[0] * ICoin.fiveCent;
    total = total + price[1] * ICoin.tenCent;
    total = total + price[2] * ICoin.twentyfiveCent;
    total = total + price[3] * ICoin.fiftyCent;
    return total;
}

export function getTotalChange(total: number, price: number): number {
    return total - price;
}

export function getTotalChangeInCoins(amount: number): Array<number> {
    let changeInCents = [];
    let changeAmount = amount;
    let fiftyCent = Math.floor(changeAmount / ICoin.fiftyCent);
    changeAmount = changeAmount % ICoin.fiftyCent;

    let twentyfiveCent = Math.floor(changeAmount / ICoin.twentyfiveCent);
    changeAmount = changeAmount % ICoin.twentyfiveCent;

    let tenCent = Math.floor(changeAmount / ICoin.tenCent);
    changeAmount = changeAmount % ICoin.tenCent;

    let fiveCent = Math.floor(changeAmount / ICoin.fiveCent);
    changeInCents.push(fiveCent, tenCent, twentyfiveCent, fiftyCent);
    return changeInCents;
}

export function updateMachineCoins(currentCoins: Array<number>, newCoinSales: Array<number>): Array<number> {
    let machineCoins = []
    if (currentCoins.length == 0) {
        machineCoins = newCoinSales;
    } else {
        currentCoins[0] += newCoinSales[0];
        currentCoins[1] += newCoinSales[1];
        currentCoins[2] += newCoinSales[2];
        currentCoins[3] += newCoinSales[3];
        machineCoins = currentCoins;
    }
    return machineCoins;
}
