interface ProductTemplate {
  height: number;
  width: number;
  color: string;
}

export const productMaker = (product: ProductTemplate) => {
  return product;
};

const myProduct: ProductTemplate = {
  height: 10,
  width: 10,
  color: "red",
};

console.log(productMaker(myProduct));
