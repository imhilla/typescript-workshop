// type No = "No";
// type Zero = 0;

// function onlyNo(no: No): Zero {
//   return 0;
// }
export type Product = {
  name: string;
  price: number;
  description: string;
};

export type Order = {
  orderId: string;
  amount: number;
  discount?: number;
};

// intersection
type Cart = Product & Order;
const cart: Cart = {
  name: "Mango",
  price: 400,
  orderId: "sfdfdvdvd",
  amount: 3,
  description: "This is a description",
};
console.log(cart);
