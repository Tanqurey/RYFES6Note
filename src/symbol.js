/*
Symbol 是ES6新引入的一种数据类型，它是继Null Undefined String Number Object Boolean 后新增的第7种数据类型
它表示一种独一无二的值。
也就是说，对象的属性名现在有两种形式，一种是原来的字符串，另一种是Symbol类型
*/

let s1 = Symbol()
console.log(typeof s1) // 'symbol'

/*
注意Symbol不能使用new实例化，这是因为它本身就是一个原始的数据类型

Symbol可以接受一个字符串作为参数，这主要是为了方便控制台进行显示或转换为字符串时使用
*/

let s2 = Symbol('cc')

console.log(s2)
console.log(s2.toString()) //Symbol(cc)

/*
相同参数的symbol的值是不同的。
*/

let s3 = Symbol('aa')
let s4 = Symbol('aa')

console.log(s3 == s4)

/*
Symbol不可以与其他类型数据进行运算，但可以被转换为布尔值

由于每一个Symbol值均不相等，则Symbol可以作为标识符用于对象的属性名，保证不会出现同名属性。
Symbol作为对象属性不可通过.调用

它保证了不会出现同名的属性。
*/

// 方法1
let a = Symbol()

let obj = {
  [a]: 'you'
}

obj[a] = 'hello'

Object.defineProperty(obj, a, {
  value: 'yes'
})

console.log(obj[a])

/*
实例：消除魔法字符串
魔法字符串就是在代码中多次出现，形成强耦合的字符串。


*/

/*
Symbol作为属性名时，该属性不会出现在for-in/for-of循环中。
同时也不会被Object.getOwnPropertyNames返回
只能通过Object.getOwnPropertySymbols得到
*/

let s5 = Symbol()
let s6 = Symbol()

let obj2 = {
  [s5]: '123',
  [s6]: '456'
}

console.log(Object.getOwnPropertySymbols(obj2))

// 当希望使用同一个symbol值时，可以借助for方法

let s7 = Symbol.for('aaa')
let s8 = Symbol.for('aaa')

console.log(s7 === s8)