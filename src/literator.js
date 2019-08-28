/*
Iterator 是一个遍历器的接口，为各种不同的数据结构提供统一的访问机制。任何数据结构，只要部署了Iterator接口，就可以完成遍历操作

Iterator的目的是为所有的数据结构提供统一的访问机制，即for of循环。使用for of时循环会去自动寻找Iterator接口。
如果数据结构部署了Iterator,那么它就是可遍历的。

默认的Iterator接口布置在数据结构的Symbol的iterator属性中，只要有该属性，那么该数据结构就是可以遍历的。
执行该属性将返回一个遍历器对象，该对象的根本特征就是具有next方法，每调用一次就会返回一个代表当前成员的对象。

*/

const obj = {
  [Symbol.iterator]: function () {
    return {
      // 这里是遍历器对象
      next: function () {
        // 这里是next方法
        return {
          // 固有属性
          value: 1, //对所有的Next都返回1
          done: true
        }
      }
    }
  }
}

let iter = obj[Symbol.iterator]()

console.log(iter.next())

/*
对于原生部署Iterator接口的数据结构，不用我们自己编写遍历器生成函数，for-of 将自动遍历

这包括：
Array
Map
String
TypedArray
arguments
nodeList
Set
*/

let arr = [1, 2, 3, 4, 5]

let iter2 = arr[Symbol.iterator]()

console.log(iter2.next())

let map = new Map()
map.set('name', 'cc')
map.set({
  name: 'cc',
  age: 18
}, 'userInfo')

let iter3 = map[Symbol.iterator]()

console.log(iter3.next())
console.log(iter3.next()) //此时value是一个数组

let str = 'hello my dear'
let iter4 = str[Symbol.iterator]()

console.log(iter4.next()) // 依次返回各字符
console.log('------1---------')

/*
注意：Object不具备默认的Iterator接口，需要在对象上定义，或者在其原型链上具备也可
*/
function Obj(value) {
  this.value = value
  this.next = null
}

Obj.prototype[Symbol.iterator] = function () {
  let current = this
  let iterator = {
    next: next
  }

  function next() {
    if (current) {
      let value = current.value
      current = current.next // 闭包泄露遍历指针，指针移动
      return {
        value: value,
        done: false
      }
    } else {
      return {
        done: true
      }
    }
  }
  return iterator
}

let o1 = new Obj(1)
let o2 = new Obj(2)
let o3 = new Obj(3)

o1.next = o2
o2.next = o3

for (let val of o1) {
  console.log(val) // 1 2 3
}

// 或

let inter3 = o1[Symbol.iterator]()
console.log(inter3.next())
console.log(inter3.next())
console.log('--------2---------')

// 关于iterator的最简单的实现方式就是Generator
// 几乎不需要部署任何代码，只要用yield给出每一步需要返回的值即可
let myIterable = {}

myIterable[Symbol.iterator] = function* () {
  yield 1
  yield 2
  yield 3
  yield 4
}

for (let val of myIterable) {
  console.log(val)
}

console.log('---------3---------')
/*
一个数据结构只要部署了iterator，就可以使用for-of 遍历方法进行遍历。

伪数组与for-of，伪数组一般都有iterator接口，但是你也可以以重写一个
比如：
nodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]
但是，不重写也完全没问题
*/

function print() {
  for(let val of arguments){
    console.log(val)
  }
}

print(1,2,3,4,5,6,7,8)

/*
for-of的优势是
和for-in一样简洁
提供了遍历所有数据结构的同一接口
可以搭配break,continue使用

for-in 的缺陷是会遍历到原型链上的键
*/