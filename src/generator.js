/*
Generator可以理解为状态机，封装了多个内部状态
同时Generator会返回一个遍历器函数，这个遍历器函数可以一次遍历函数内部的每一个状态

形式上，Generator 是一个普通函数，有两个显著特征：
function 后跟*
用yield关键字定义内部状态
*/

function* testGenerator() {
  // 定义4个状态
  yield 'hello' //yield后的值将被返回
  console.log('now is hello status')
  yield 'world'
  console.log('now is world status')
  yield 'linda'
  console.log('now is linda status')
  return 'goodbye'
}

/*
上述函数执行后，不执行，而返回一个指向内部状态的遍历器对象
  */

let g1 = testGenerator()

console.log(g1.next())
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())


/*
每调用一次，状态改变1次，指针移向下一个状态 
函数是分段执行的，yield就是中断执行的标记。
调用next方法可从断点处继续执行
*/

/*
从上面可以得知：
yield语句就是暂停的标志;
 · 遇到yield就暂停执行，并将紧跟在yield后的表达式返回
 · 再次遇到yield时，继续由断点执行，直至遇到下个yield
 · 遇到return ,同样会把return后的表达式作为返回值返回

   某种意义上说,yield可以从一个函数返回多个值
   yield只能使用在Generator函数中
   Generator函数内部也可以不使用yield ，这样就变成一个单纯的延迟执行函数
*/

function* fn() {
  console.log(123)
}

let g2 = fn()

setTimeout(() => {
  g2.next()
}, 500)

console.log('-------1-------')

/*
上述代码中，如果fn是普通函数，那么在对p2赋值时就会立即执行，但是它是generator函数
必须由next调用，因此允许延迟调用

next 方法的参数。默认情况下，yield 没有返回值。即默认返回undefined

next提供一个参数，作为上一个yield的返回值
*/

var a

function* generator1() {
  a = yield(4 + 6)
}

// console.log(generator1().next())
// console.log(a) // undefined

generator1().next(10)
console.log(10)

/*
上述操作非常具有语法意义，可以允许我们在函数执行过程中向函数注入不同的值

第一次使用next时所传递的参数是无效的，将被编译器忽略
*/
console.log('-------2-------')
/*
Generator.prototype.throw()

每个由generator返回的对象都具有throw方法，用于在函数体外抛出错误
throw可以传一个参数，说明错误信息

这个throw与全局抛出错误的throw关键字是不同的
*/

function* generator2() {
  try {
    yield
  } catch (e) {
    console.log('内部捕获' + e) //只支持捕获一个错误
  }
}

let i = generator2()

i.next()

try {
  i.throw(new Error('err1'))
  i.throw(new Error('err2'))
} catch (e) {
  console.log('外部捕获' + e) //外部捕获第二个错误
}