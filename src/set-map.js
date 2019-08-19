/*
Set
类似于数组，但不会有重复的成员

生成一个Set
*/

const s1 = new Set()
//可以接收数组
const s2 = new Set([1, 2, 3, 4, 5, 5])
console.log(s2)

/*
Set结构实例有以下属性

Set.prototype.constructor
构造函数，默认为Set()
Set.prototype.size
set实例中的成员个数

Array.from()路由把set转换为数组

.add(val) 向实例中追加元素,返回set结构本身
.delete(val) 删除实例中的指定值，返回是否删除成功
.has(val) 确认实例是否包含val
.clear() 清除所有成员，无返回值

遍历操作

.keys()
.values()
.entries()
.forEach()
*/

const s3 = new Set(['a', 'b', 'c', 'd', 'e'])

for (let i of s3.keys()) {
  console.log(i)
}

for (let j of s3.values()) {
  console.log(j)
}

for (let k of s3.entries()) {
  console.log(k)
}

/*
应用
转数组
*/

let a1 = [...s3]
console.log(a1)

/*
weakSet

与set类似，但是weakSet的成员只能是对象，
weakSet的对象都是弱引用，如果其他对象不再引用该对象，垃圾回收机制将直接回收，不考虑是否还存在于weakset中


Map
JS的对象只能使用字符串作为键
Map为了克服这一缺陷，它可以将任何类型的值作为键名
只有对同一个对象的引用,map才将其视为同一个键

增删查清API与Set类似


*/

let m1 = new Map()
let obj1 = {
  name: 'name'
}

m1.set(obj1, 'obj1')
console.log(m1)

/*
属性与方法

.size 返回Map成员总数
.set(key,val)
为实例增加新的键值对，支持链式写法
.get(key)
读取键值
.has(key)
检测事例中是否有某一键
.delete(key)
删除某一键值对
.clear()
清空实例
*/

/*
Map转对象
*/

let m2 = new Map().set('a', 1).set('b', 2)

function mapToObj(m) {
  let obj = {}
  for (let [k, v] of m) {
    obj[k] = v
  }
  console.log(obj)
  return obj
}

let o3 = mapToObj(m2)

/*对象转map */
console.log('-------------')

function objToMap(o) {
  let map = new Map()
  for (let k of Object.keys(o)) {
    map.set(k, o[k])
  }
  console.log(map)
}
objToMap(o3)