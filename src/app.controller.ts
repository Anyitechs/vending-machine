import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { IBuy, IMachineCoin, IProducts, IUpdateProduct } from './interface/vending-machine-interface';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  getProducts(): Array<IProducts> {
    return this.appService.getProducts();
  }

  @Post('products')
  buyProduct(@Body() product: IBuy) {
    return this.appService.buyProduct(product);
  }
}

@Controller('api/v1/maintainer')
export class MaintainerController {
  constructor(private readonly appService: AppService) {}

  @Post('products')
  async create(@Body() createProduct: IProducts) {
    return this.appService.addProducts(createProduct);
  }

  @Put('/products/:slot')
  update(@Param('slot') slot: string, @Body() updateProd: IUpdateProduct) {
    return this.appService.updateProduct(updateProd, slot);
  }

  @Get('coins')
  checkMachineCoins(): Array<number> {
    return this.appService.checkMachineCoins();
  }

  @Post('coins')
  updateCoinsInMachine(@Body() coins: IMachineCoin): Array<number> {
    return this.appService.updateCoins(coins.coins);
  }
}