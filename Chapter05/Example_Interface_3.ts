interface ProductTemplate {
  height: number;
  width: number;
  color: string;
}

interface ProductClassInterface {
  product: ProductTemplate;
  makeProduct(product: ProductTemplate): ProductTemplate;
}

class ProductClass implements ProductClassInterface {
  product: ProductTemplate;
  constructor(product: ProductTemplate) {
    this.product = product;
  }

  makeProduct(): ProductTemplate {
    return this.product;
  }
}

const product: ProductTemplate = {
  height: 100,
  width: 100,
  color: "blue",
};
