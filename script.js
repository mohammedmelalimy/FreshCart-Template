const myobject = {
  a:1 ,
  b:2 ,
}

Object.defineProperties(myobject , {
  c:{
    writable:true,
    enumerable:true,
    configurable:true,
    value:3,
  },
  d: {
    writable:true,
    enumerable:true,
    configurable:false,
    value:7,
  },
});
console.log(Object.getOwnPropertyDescriptor(myobject ,'d'))