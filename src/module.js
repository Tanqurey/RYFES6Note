/*
js一直没有模块体系，使得开发大型项目非常麻烦

在ES6的模块体系中默认使用严格模式
主要体现在：
1) 变量必须声明后再使用
2) 函数内不可以有与参数同名的属性，否则报错
3) 不可使用with语句
4) eval将无法读取外部的变量
5) 不可对只读属性赋值
6) 不可对arguments赋值
7) 禁止this指向全局对象
8) 不可使用arguments.callee/arguments.caller


模块功能主要借助于export import 两个命令
必须放在顶级作用域

一个模块就是一个独立的文件，该文件内部所有的变量外部无法获取。
必须使用export进行导出，例如
*/
export var a = 100
export function func() {

}

var b = 10

function func2() {

}

export {
  b,
  func2 as function2
}

//上述func重命名为function2
// export输出的变量会进行动态更新
//导入使用Import
import {
  a,
  b as bb
} from '...'

//变量名必须按照导出模块的设置，多次执行同一个import只会执行一次

/*
模块的整体加载

*/

import * as obj from '...'

/*
将导入 导出模块内所有的含export声明的变量
*/

/*
export default ???
*/

var z = 150
export default z

/*
在引入该类型变量时不必书写花括号
*/