// function outerFunction(x){
//     function innerFunction(y){
//         return x + y;
//     }

//     return innerFunction;
// }

// const add = outerFunction(5);
// const result = add(10);

// console.log(add);

// -------------------------------------------

// function createCounter() {
//   let count = 0;

//   function increment(value = 1) {
//     count += value;
//   }

//   function decrement(value = 1) {
//     count -= value;
//   }

//   function getCount() {
//     return count;
//   }

//   return {
//     increment,
//     decrement,
//     getCount,
//   }
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// // counter 1
// console.log(counter1.getCount());
// console.log(counter1.increment(2));
// console.log(counter1.getCount());

// ------------------------------------------------

// function createBasket() {
//   // a object for basket
//   const basket = {};

//   // item functions in basket
//   function addItem(item, quantity = 1) {
//     if (!basket[item]) {
//       basket[item] = quantity;
//     } else {
//       quantity += 1;
//     }
//   }

//   function removeItem(item) {}
//   function incrementQuantity(item, quantity = 1) {}
//   function decrementQuantity(item, quantity = 1) {}
//   function getBasket() {
//     return basket;
//   }

//   return {
//     addItem,
//     removeItem,
//     incrementQuantity,
//     decrementQuantity,
//     getBasket,
//   };

//   console.log(basket);

// }

// const basket = createBasket();
// basket.addItem("elma", 5);