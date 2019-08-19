/*
属性的简介表示方法

ES6允许直接写入变量和函数作为对象的属性和方法

//属性名表达式

ES6允许用表达式做对象的键,但不可与简洁表示法通用
*/

let obj = {
  'aa': 'aa',
  ['word']: 'world',
}


for (let key in obj) {
  console.log(key)
}

/*
Object.is()
//比较两个值是否相等，严格比较，不进行类型转换。
无法比较两个对象是否相等
*/
console.log(Object.is({}, {}))

/*
Object.assign(target,source1,source2,...)
将源对象所有可枚举属性复制给新对象，是浅复制
这意味着如果源对象的某个属性是对象，目标对象得到的是该对象的引用
多个重名属性向后覆盖
*/

let obj1 = {
  a: 10,
  b: 11,
  c: 12,
  d: 13
}

let obj2 = {
  a: 11,
  f: 14
}

let obj3 = {
  a: 12,
  b: 12,
  j: 100
}

console.log(Object.assign(obj1, obj2, obj3))

let obj4 = {
  a: {
    user: 'zz',
    pwd: '123'
  }
}

let obj5 = {
  a: {
    user: 'cc',
    pwd: '123'
  }
}

let obj6 = Object.assign(obj4, obj5)
obj4.a.user = 'aa'
console.log(obj6)

/*
__proto__ 用于读取或设置对象的原型对象
不建议直接操作该属性

Object.setPrototypeOf(obj,prototype)
用于将obj实例的原型设置为prototype

Object.getPrototypeOf(obj)
读取obj的原型对象
*/

/*
以下均为遍历器对象，必须通过Object进行调用
Object.keys(obj) 返回对象自身，不包括继承可遍历属性的键名组成的数组
Object.values(obj) 返回对象自身，不包括继承可遍历属性的键值组成的数组
Object.entries(obj) 返回对象自身，不包括继承可遍历属性的键值对组成的数组


扩展运算符
解构赋值
解构赋值是浅复制

解构赋值必须是最后一个参数
接收剩余属性
*/

let {
  x,
  y,
  ...z
} = {
  x: 1,
  y: 2,
  a: 1,
  b: 2,
  c: 4
}

console.log(z)

/*
...用在对象上用于取出对象上所有可遍历的属性，并将其复制到当前对象中
相当于Object.assign
*/

let p = {
  a: 100,
  b: 50,
  func: () => {
    console.log(123)
  }
}

let pp = {
  ...p
}

console.log(pp)