# Vending Machine Program in Nest.JS (TypeScript)


## Description

A basic Vending machine backend server in TypeScript

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Endpoints Available
- The endpoints exposed can be interacted with as a regular user and a maintainer

### User

#### Get Available products

- Request Method: GET
```bash
$ /api/v1/users/products
```

#### Purchase a product

- Request Method: POST
```bash
$ /api/v1/users/products

Sample payload = {
  "slot": 3,
  "quantity": 1,
  "price": [2,2,1,3]
}
```
Where the array of ```price``` being passed represents the following,
- Number of 5 cents coins
- Number of 10 cents coins
- Number of 25 cents coins
- Number of 50 cents coins


### Maintainer

#### Add Product to Vending Machine

- Request Method: POST
```bash
$ /api/v1/maintainer/products

Sample Payload = {
  "slot": 4,
  "name": "Biscuit",
  "quantity": 40,
  "price": 15
}
```

#### Update Product Proce or Quantity

- Request Method: PUT
```bash
$ /api/v1/maintainer/products/:slot

Sample Payload = {
  "price": 50,
  "quantity": 100
}
```

#### Check The Amount of Coins of different type available in the Vending Machine

- Request Method: GET
```bash
$ /api/v1/maintainer/coins
```

#### Update The Amount of Coins of different type in the Vending Machine

- Request Method: POST
```bash
$ /api/v1/maintainer/coins

Sample Payload = {
  "coins": [2,2,1,3]
}
```
Where ```coins``` passed are represented in the following format,
- Number of 5 cents coins
- Number of 10 cents coins
- Number of 25 cents coins
- Number of 50 cents coins


## Stay in touch

- Author - [Ifeanyichukwu Amajuoyi](https://www.linkedin.com/in/ifeanyichukwu-amajuoyi-8b6229153/)
- Email - [Aifeanyi019@gmail.com]

