// import "reflect-metadata";

// function Injectable(key: string) {
//   return (target: Function) => {
//     Reflect.defineMetadata("a", 1, target);

//     const metadata = Reflect.getMetadata(key, target);
//     console.log(metadata);
//   };
// }

// function Inject(key: string) {
//   return (target: Function) => {
//     Reflect.defineMetadata("a", 1, target);

//     const metadata = Reflect.getMetadata(key, target);
//     console.log(metadata);
//   };
// }

// @Injectable("C")
// export class C {}

// @Injectable("D")
// export class D {
//   constructor(@Inject("C") c: C) {}
// }

// //----------------------------
// function Component(id: number) {
//   console.log("init");

//   return (target: Function) => {
//     console.log("run");

//     target.prototype.id = id;
//   };
// }

// function Logger() {
//   console.log("init Logger");

//   return (target: Function) => {
//     console.log("run Logger");
//   };
// }

// function Method(
//   target: Object,
//   propertyKey: string,
//   propertyDescriptor: PropertyDescriptor
// ) {
//   console.log(target, "Method");
//   console.log(propertyKey);
//   const oldValue = propertyDescriptor.value;
//   propertyDescriptor.value = function (...args: any[]) {
//     return args[0] * 10;
//   };
// }

// function Prop(target: Object, propertyKey: string) {
//   let value: number;
//   console.log(propertyKey, "propertyKey");

//   const getter = () => {
//     console.log("get");

//     return value;
//   };

//   const setter = (newVal: number) => {
//     console.log("set");

//     value = newVal;
//   };

//   Object.defineProperty(target, propertyKey, {
//     set: setter,
//     get: getter,
//   });
// }

// function Param(target: Object, propertyKey: string, index: number) {
//   console.log(index);
// }

// @Logger()
// @Component(1)
// class User {
//   @Prop id: number;

//   @Method
//   updateId(@Param newId: number) {
//     this.id = newId;

//     return this.id;
//   }
// }

// console.log(new User().id);
// console.log((new User().id = 3));
// console.log(new User().id);
