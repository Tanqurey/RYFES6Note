//proxy
/*
在目标对象架设拦截层
拦截对对象的操作
*/

// let p1 = new Proxy(target,handler) target是所要拦截的目标对象 hnadler是定制拦截行为的对象

/*
如果handler是空对象

，则没有任何拦截效果，直接通向源对象
*/

let p1 = new Proxy({
  discount: 0.8
}, {
  get: function (target, property) {
    return target[property] * target.discount
  }
})

p1.price = 10
console.log(p1.price)
console.log('price' in p1)
/*
实例方法：
1)get(target,key,receiver)
拦截对对象属性的读取

2)set(target,key,receiver)
拦截对象属性的设置

3)has(target,key)
拦截 key in proxy的操作，返回布尔值

4)deleteProperty(target,key)
拦截delete proxy[key] 的操作，返回布尔值


1.get
get方法可以继承

2.set 
拦截对属性的赋值

3.apply
拦截函数的调用、call/apply等操作
*/
console.log('------1-------')
let target1 = function () {
  console.log('aaaaa')
}

let handler = {
  apply: function () {
    return 'bbbbb'
  }
}

let p2 = new Proxy(target1, handler)
console.log(p2())

let target2 = function (a1, a2) {
  return a1 + a2
}

let handler2 = {
  apply(target, ctx, args) {
    return Reflect.apply(...arguments) * 2
  }
}

let p3 = new Proxy(target2, handler2)

console.log(p3(1, 2))

/*
has用来拦截hasProperty操作，典型的就是in运算符
但不会拦截 for -in 循环
不判断一个属性是自身的还是继承的属性
*/

let obj = {
  _pwd: '123',
  _id: '123456',
  name: 'cc'
}

let handler3 = {
  has: function (target, key) {
    if (key.includes('_')) return false
    return key in target
  }
}

let p4 = new Proxy(obj, handler3)
console.log('_id' in p4)

/*
deleteProperty()

用于拦截delete操作，如果这个方法返回false或抛出错误时，相应属性无法被删除


*/

let handler4 = {
  deleteProperty: function (target, key) {
    if (key.includes('_')) return false
    return Reflect.deleteProperty(target, key)
  }
}

let p5 = new Proxy(obj, handler4)

delete p5._id
delete p5.name
console.log(p5._id)
console.log(p5.name)

