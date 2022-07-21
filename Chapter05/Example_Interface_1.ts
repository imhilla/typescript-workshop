interface ProductTemplate {
  height: number;
  width: number;
  color: string;
}

interface productInterfaceFunction {
  (product: ProductTemplate): ProductTemplate;
}

export const productMaker: productInterfaceFunction = (
  product: ProductTemplate
): ProductTemplate => {
  return product;
};

const myProduct: ProductTemplate = {
  height: 10,
  width: 10,
  color: "red",
};

console.log(productMaker(myProduct));
