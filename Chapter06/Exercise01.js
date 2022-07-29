var products_list = [];
function makeProduct(p) {
  products_list.push(p);
}
for (var i = 0; i < 5; i++) {
  var p = {
    name: "Product" + "_" + "$i",
    count: i,
    price: 100,
    amount: 15,
  };
  makeProduct(p);
}
console.log(products_list);
