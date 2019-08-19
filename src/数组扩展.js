/*
扩展运算符spread

...

其作用与rest运算符相反，将一个数组按元素转换为用逗号分隔的参数列表
*/

console.log(...[1, 2, 3])

function sum(ele1, ele2, ele3) {
  return ele1 + ele2 + ele3
}

console.log(sum(...[1, 2, 3])) //6

/*
可以位于参数列表的任何位置

2.新增方法

Array.from()
将类似数组的对象和可遍历的对象转换为真正的数组

比如说arguments/nodeList

作用类似于
[].slice.call()

还可接收第二个参数，可以对返回的数组的每个元素进行处理。类似map
*/

console.log(Array.from([1, 2, 3, 4, 5], item => item * item))

/*
Array.of()
用于将一组数值转换为数组

find / findIndex

用于找出数组中满足给定回调函数条件的第一个元素/索引
*/

console.log([1, 2, 3, 20, 70, 100].find((item, idx) => {
  return item > 10
}))

console.log([1, 2, 3, 20, 70, 100].findIndex((item, idx) => {
  return item > 20
}))

/*
实例方法 

.fill()
用指定元素覆盖数组内所有的元素
*/

console.log([1, 2, 3, 4, 5, 6, 7].fill(200))

/*
为了便于遍历数组，es6提供了3个新的实例方法
entries/keys/values,可用for of 循环遍历

不同的是keys是对索引的遍历
entries是对索引+元素的遍历
values是对元素的遍历
*/

let arr = ['a', 'b', 'c', 'd', 'e']

for (let i of arr.keys()) {
  console.log(i)
}
for (let j of arr.values()) {
  console.log(j)
}
for (let k of arr.entries()) {
  console.log(k)
}
/*
weakMap必须以对象为键名，且键名所指对象不计入垃圾回收机制
*/