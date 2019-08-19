/*

Reflect的目的有两个
1.将Object对象的一一些明显属于语言内部的方法放到Reflect对象上
2.修改某些Object方法的返回结果，使其更合理
3.使Object的操作变为函数行为
4.Reflect和proxy上的方法有一一对应的关系

target就是对象

静态方法

.get(target,name)
返回target的指定属性

.set(target,name,val)
为target设置name属性

.has(target,name)
检查对象中是否有name属性
相当于in操作符

.deleteProperty(target,name)
移除对象中的某个属性
相当于delete target[name]

.constructor(target,args)
等同于 new target(...args)
提供了不使用new就调用构造函数的方法

.defineProperty
为对象定义属性
相当于Object.difineProperty 
但后者今后会废除
*/

//Reflect.defineProperty(obj,name,{val=>todo})