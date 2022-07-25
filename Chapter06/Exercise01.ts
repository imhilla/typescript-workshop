type Count = number;
type Product = {
  name: string;
  count: Count;
  price: number;
  amount: number;
};

const products_list: Product[] = [];

function makeProduct(p: Product) {
  products_list.push(p);
}

for (let i = 0; i < 5; i++) {
  let p: Product = {
    name: "Product" + "_" + `$i`,
    count: i,
    price: 100,
    amount: 15,
  };
  makeProduct(p);
}
console.log(products_list);
