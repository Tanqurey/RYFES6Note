/*
1.默认值

*/
function print(a, b = '你好') {
  console.log(a + b)
}

print('我说')

/*
函数默认值可与解构赋值同用
定义了默认值的参数放在参数列表末尾
*/

/*
当我们设置了函数的参数默认值之后，
参数会形成一个单独的作用域，初始化完毕后就会消失
*/

var o = 100

function print2(o = 10, p = o) {
  console.log(p)
}

print2() //10

/*
rest 参数
形式为...变量名
用于获取函数的多余的参数，避免了arguments对象的使用
rest参数搭配的是一个数组，该变量将多余的参数放入其中
rest参数之后不能再有其他参数，必须是最后一个参数，否则报错
*/

// 这个函数可以接受任意多个的参数
function sum(...values) {
  let sum = 0
  for (let value of values) {
    sum += value
  }
  console.log(sum)
}

sum(1, 12, 5, 6, 3, 8, 5)

/*
函数内部如果使用了默认值，解构赋值或者扩展运算符，函数体内部就不可以显式指定严格模式


对函数使用.name可以返回函数名

//箭头函数
可以使用变量解构
如果箭头函数想要返回一个对象，就要在花括号外加大括号
不可以使用arguments，只能使用rest
*/

let func = () => ({
  a: 100,
  b: 10
})

console.log('------1-------')

/*
关于this指向
箭头函数内部没有自己的this,其this就是外层代码块的this。
this自动捕获父级执行上下文的this
因此，不可以当做构造函数
*/

// 假设以下代码均在浏览器端执行


handler.func1() //回溯到定义阶段，在定义环境下不存在自己的this，所以使用了handler环境下的this————window
handler.func2() //执行环境是handler对象，所以打印handler

//例题2
var a = 10 //注意：这里如果用let声明下边就打不出来了

let handler2 = {
  a: 100,
  print1() {
    console.log(this.a)
  },
  print2: () => {
    console.log(this.a)
  }
}

let func3 = handler2.print1
let func4 = handler2.print2
func3() //10,执行环境下this绑定于全局

handler2.print2() //10
func4() //10,定义环境下this就已经绑定了全局了

console.log('-------2---------')

//例题3

function handler3() {
  this.a = 100
  return () => {
    console.log(this)
    console.log(this.a)
  }
}

handler3()() // 100

let obj = {
  a = 100,
  func: () => {
    return ()=>{
      console.log(a)
    }
  }
}