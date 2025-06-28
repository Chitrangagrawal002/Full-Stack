import {greet} from './greetings.js'
import * as math from './mathOperations.js'

const name='Harsh';
console.log(greet(name));

console.log(`Addition: ${math.add(10, 5)}`)
console.log(`Subtraction: ${math.subtract(10, 5)}`)
console.log(`Multiplication: ${math.multiply(10, 5)}`)
console.log(`Division: ${math.divide(10, 5)}`)
