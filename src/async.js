/*
何为async? 
async是Generator函数生成的。

async函数返回一个Promise对象，可以返回一个then方法。
函数声明使用async表明函数内有异步操作

由于async返回的是Promise对象，所以可作为await的参数

*/

// async function timer() {
//   await new Promise(resolve => {
//     setTimeout(() => {
//       resolve('time out')
//     }, 3000)
//   })
//   return 'ok'
// }

// async function print() {
//   let a
//   await timer().then(data => {
//     console.log(data)
//   })
// }

// print()

// async函数有多种使用形式

/*
async function ()

函数表达式

= async ()=>{

}

对象方法

async func(){

}



async 函数返回阴Promise对象，async内部return 的值会被then方法接收到，而不是接收resolve内的参数
async 函数返回的Promise必须等到内部所有await命令后的promise实例执行完毕后才会发生整体的状态改变。
除非异步处理出错或return

await
await 后跟一个Promise实例，如果不是，将会被立即转换为一个立即resolve的Promise实例
*/

// async function asyncFunc() {
//   return await 123
// }

// asyncFunc().then(data => {
//   console.log(data)
// })

/*
一旦await后的promise被rejected,则reject的参数会被catch接收，而不是then
*/

// async function af2() {
//   await Promise.reject('error')
// }

// af2().then().catch(err => {
//   console.log(err)
// })

/*
上述代码中,await语句没有return。但reject方法的参数仍被传到了catch中，加上return 结果也是一样的

当某一await后的状态变为reject或异步执行直接出错时,其后面的await将都不执行
若要想继续执行，请使用try-catch或在promise外用catch捕获错误
*/

// async function af3() {
//   await Promise.reject('error')
// }

// async function af4() {
//   return await Promise.resolve('ok1')
// }

// async function af5() {
//   return await Promise.resolve('ok2')
// }

// async function main() {
//   try {
//     await af3()
//   } catch (e) {
//     console.log(e)
//   }
//   let a = await af4()
//   let b = await af5()
//   console.log(a + b)
// }

// main()

/*
如果某几个异步操作相互之间都是独立的，则最好让它们同时触发以节约时间
*/

// async function as6() {
//   return await new Promise(res => {
//     setTimeout(() => {
//       res('ok1')
//     }, 1000)
//   })
// }

// async function as7() {
//   return await new Promise(res => { // 记得加return
//     setTimeout(() => {
//       res('ok2')
//     }, 1000)
//   })
// }

// let info1
// let info2
// async function as8() {
//   return await Promise.all([as7(), as6()])
// }

// (async () => {
//   [info1, info2] = await as8()
//   console.log(info1)
// })()

/*
小测试，现有两个异步操作，它们异步操作的结果作为第三个异步操作的参数，如果前两个参数异步操作失败，第三个异步操作可以继续执行，
相应的实参为null
*/

// function asTest1() {
//   return new Promise(res => {
//     try {
//       setTimeout(() => {
//         res('data1')
//       }, 500)
//     } catch (e) {
//       res(null)
//     }
//   })
// }

// function asTest2() {
//   return new Promise(res => {
//     try {
//       setTimeout(() => {
//         res('data2')
//       }, 500)
//     } catch (e) {
//       res(null)
//     }
//   })
// }


// Promise.all([asTest1(), asTest2()]).then(async result => {
//   let data3 = await new Promise(res => {
//     setTimeout(() => {
//       res(result.reverse())
//     }, 500)
//   })
//   console.log(data3)
// })

/*
如果使用reject状态则
*/

function asTest1() {
  return new Promise(res => {
    setTimeout(() => {
      res(200)
    }, 500)
  })
}

function asTest2() {
  return new Promise(res => {
    setTimeout(() => {
      res(150)
    }, 500)
  })
}

async function asTest3(data) {
  await new Promise(res => {
    setTimeout(() => {
      console.log(...data)
    }, 500)
  })
  console.log(data3)
}

async function asTestAll() {
  let as1 = asTest1()
  let as2 = asTest2()
  let data1 = await as1
  let data2 = await as2
  return Promise.resolve([data1, data2])
}

asTestAll().then(async (data) => {
  await asTest3(data)
})