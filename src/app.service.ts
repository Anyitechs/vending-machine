import { Injectable } from '@nestjs/common';
import { inSufficientMoney, outOfStock } from './constants';
import { IBuy, IProducts, IUpdateProduct } from './interface/vending-machine-interface';
import { getTotalChange, getTotalChangeInCoins, getTotalCoins, updateMachineCoins } from './utility/utility';


@Injectable()
export class AppService {
  products:IProducts[] = [
    {
      "slot": 1,
      "name": "ice cream",
      "quantity": 100,
      "price": 100
  },
  {
      "slot": 2,
      "name": "pepsi",
      "quantity": 200,
      "price": 50
  },
  {
    "slot": 3,
    "name": "burger",
    "quantity": 30,
    "price": 150
  }
  ];

  coinsInMachine: Array<number> = []



  getProducts(): Array<IProducts> {
    return this.products;
  }

  addProducts(product: IProducts): IProducts {
    this.products.push(product);
    return product
  }

  updateProduct(product: IUpdateProduct, slot): IProducts {
    for (let prod of this.products) {
      if (prod.slot == slot) {
        if (prod.price != product.price) {
          prod.price = product.price;
        } else if (prod.quantity != product.quantity) {
          prod.quantity = product.quantity;
        }
      }
    }
    return this.products[slot - 1]
  }

  buyProduct(product: IBuy): number | string | Object {
    let totalInCoins;
    for (let prod of this.products) {
      if (prod.slot == product.slot) {
        if (prod.quantity >= product.quantity) {
          if (prod.price * product.quantity <= getTotalCoins(product.price)) {
            prod.quantity -= product.quantity;
            let totalCoins = getTotalCoins(product.price);
            let totalChange = getTotalChange(totalCoins, prod.price * product.quantity);
            totalInCoins = getTotalChangeInCoins(totalChange);
            this.coinsInMachine = updateMachineCoins(this.coinsInMachine, totalInCoins);
          } else {
            return inSufficientMoney;
          }
        } else {
          return outOfStock;
        }
      }
    }
    return totalInCoins;
  }

  checkMachineCoins(): Array<number> {
    return this.coinsInMachine;
  }

  updateCoins(newCoins: Array<number>): Array<number> {
    return this.coinsInMachine = updateMachineCoins(this.coinsInMachine, newCoins);
  }
}
