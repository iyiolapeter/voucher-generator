# voucher-generator
Crytography secure random number generator written in TypeScript suitable for numeric vouchers, recharge cards or coupon codes

### Installation

```sh
$ npm install --save nigerian-phone-number-validator
```

### Usage

```typescript
import { calculateCheck, generate, GenerateOptions } from "voucher-generator"
let options: GenerateOptions = {
    length: 16,
    check: true // makes the last digit a check digit using luhn algorithm
}
```
or 

```javascript
const { calculateCheck, generate } = require("voucher-generator")
let options = {
    length: 16,
    check: true // makes the last digit a check digit using luhn algorithm
}
```
then

#### Generate 
```typescript
console.log(generate(options)) // 7641304460542031

```
#### Calculate Check Digit 
```typescript
console.log(calculateCheck('764130446054203')) // 1

```
### Testing

```sh
$ npm test
```