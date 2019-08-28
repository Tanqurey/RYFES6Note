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

*/