/*
class 用于定义类
*/

class C1 {
  constructor() {
    this.a = 'a'
    this.b = 'b'
  }

  print() {
    console.log('C1')
  }
}

// 类的数据类型就是函数，类本身就指向构造函数

console.log(typeof C1)
console.log(C1.prototype.constructor === C1)

/*
事实上，使用class时，类的所有方法都定义在prototype属性上
同时，类的所有方法都是不可枚举的

类内部默认使用严格模式


1.constuctor
类的默认方法，通过new命令生成实例对象时默认调用该方法。
如果没有，将添加空的构造函数

类的所有实例返回一个原型对象

2.Class表达式
*/

const C2 = class Class2 {

}

// 注意，C2才能全局使用，Class2仅能在内部使用，Class2可被省略
// 不存在变量提升

/*
this 指向
类方法内部如果有this，将默认指向类的实例。
但如果把方法单独提出来使用，则this会指向方法运行时所在的环境

静态方法的定义
在类声明中用static关键字在函数名前声明即可

*/

class C3 {
  static func() {

  }
}

/*
class 通过extends关键字实现继承
*/

class Father {

}

class Son extends Father {
  constructor() {
    super() //必须有super,其作用是新建父类this对象，否则将无法实例化，并且在super之后才能使用this关键字
    //并且只能运行在构造函数中，相当于Father.prototype.call(this,args) this指向Son实例
  }
}

let o1 = new Son()

class Father2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  print() {
    console.log('ok 继承我了')
  }
}

class Son2 extends Father2 {
  constructor(x, y, z) {
    super(x, y)
    this.z = z
  }
}

let o2 = new Son2(1, 2, 3)
console.log(o2)
o2.print()

/*
super 既可以当函数使用，也可以当对象使用

当函数使用时如上面所示
代表着父类的构造函数，es6要求必须执行该函数

当做对象时，在普通方法中指向父类的原型对象，静态方法中指向父类。
因此也无法使用父类是实例上的属性与方法
通过super调用父类的方法时，super的this将会绑定在子类上
*/