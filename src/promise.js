/*
将异步操作以同步的方式表达出来

无法取消promise，一旦新建就会立即执行。
不设置回调函数，其内部抛出的错误将无法反映到外部
*/

/* let p = new Promise((res, rej) => {
//   res(data) //异步执行成功，将成功数据data传给p
//   rej(data) //异步执行失败，将失败数据data传给p
 })*/

let p2 = new Promise((res) => {
  setTimeout(() => {
    res('your data')
    return
  }, 200)
})
p2.then(data => {
  // 或者将数据传到这里
  console.log(p2)
  console.log(data)
})

console.log('-------------------')

/*
resolve/reject并不会终止Promise程序的执行，
执行将继续执行直至结束，但不建议这么做


方法
Promise.prototype.then(data)
promise执行完毕时需要执行的函数，可以接受promise传来的数据
也可用于多个promise实例的嵌套
*/

// let p3 = new Promise((res) => {
//   setTimeout(() => {
//     res('your data 2222222')
//     return
//   }, 100)
// })

// p3.then(data => {
//   console.log(data)
//   return new Promise(res => {
//     setTimeout(() => {
//       res('your data 3333333')
//       return
//     }, 100)
//   })
// }).then(data => {
//   console.log(data)
// })

/*
.catch(err)
用于指定发生错误时的回调函数
若异步操作出错，则状态变为rejected
然后就调用catch指定的回调函数。
then方法内执行的函数抛出的错误也会一并被捕获
reject的方法类似于声明抛出错误,但建议使用catch
*/
console.log('------------------1-----------------------')
let p4 = new Promise((res, rej) => {
  setTimeout(() => {
    // res('ok ok 200')
    rej(new Error('test error 1'))
  }, 100)
})

p4.then(() => {
  throw new Error('test error 2')
}).catch(err => {
  console.log(err)
})

//以上是推荐的方法：使用.catch来代替reject
//以下不推荐
p4.then(() => {}, (err) => {
  // err是来自reject的数据
  console.log(err)
})

/*
promise实例的状态一旦被改变就永久凝固，不再变化

Pormise对象错误具有冒泡性质，将一直向后传递直至被catch捕获
*/

/*
Promise.all(promiseArr)
用于把多个promise实例包装成一个Promise实例。
仅当所有promise状态为resolve时才会转为resolve
如果作为参数的promise实例有自己的catch方法，
就不会调用all的promise方法
*/
console.log('---------2----------')

let p5 = new Promise(res => {
  setTimeout(() => {
    res('p5 is finished')
  }, 100)
})

let p6 = new Promise(res => {
  setTimeout(() => {
    res('p6 is finished')
  }, 200)
})

let p7 = new Promise(res => {
  setTimeout(() => {
    res('p7 is finished')
  }, 300)
})

Promise.all([p5, p6, p7]).then(res => {
  //res是一个数组，依次对应之前的实例
  console.log(res)
})

/*
Promise.race(promiseArr)
对于参数列表中的实例，Promise.race的状态会随着最先发生变化的实例而变化

*/

Promise.race([p5, p6, p7]).then(res => {
  console.log(res) //p5
})

/*
Promise.resolve()
将现有的对象转换为promise对象

1)参数具有then方法的对象，直接转换为promise实例并立即执行then方法
2)是一个promise实例，原封不动返回
3)参数为一个原始值，将立刻封装为一个状态为resolve的实例，并且将该值作为res参数



// 附加方法
当最后一个方法（无论是catch还是then)抛出错误时这些错误将无法捕获
使用done() //没有参数
可全局捕获错误

.finally(function)
是一个不管最后promise实例状态如何都会执行的一个方法，该函数接收一个普通的回调
无论如何最后都会执行
*/