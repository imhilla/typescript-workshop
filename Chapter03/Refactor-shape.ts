const PI = 3.14;

interface Shape {
  area?: number;
  type: "circle" | "rectangle" | "rightTriangle" | "square";
}

interface Circle extends Shape {
  radius: number;
  type: "circle";
}

interface Rectangle extends Shape {
  length: number;
  type: "rectangle";
  width: number;
}

interface rightTriangle extends Shape {
  base: number;
  height: number;
  type: "rightTriangle";
}

interface Square extends Shape {
  type: "square";
  width: number;
}

function getCircleArea(circle: Circle): number {
  const { radius } = circle;
  return radius * radius * PI;
}

function getRectangleArea(rectangle: Rectangle): number {
  const { length, width } = rectangle;
  return length * width;
}

function getSquareArea(square: Square): number {
  const { width } = square;
  return getRectangleArea({ length: width, type: "rectangle", width });
}

function getRightTriangleArea(rightTriangle: rightTriangle) {
  const { base, height } = rightTriangle;
  return (base * height) / 2;
}

function getArea(shape: Shape) {
  switch (shape.type) {
    case "circle":
      shape.area = getCircleArea(shape as Circle);
      break;
    case "rectangle":
      shape.area = getRectangleArea(shape as Rectangle);
      break;
    case "square":
      shape.area = getSquareArea(shape as Square);
      break;
    case "rightTriangle":
      shape.area = getRightTriangleArea(shape as rightTriangle);
      break;
  }
}

const circle: Circle = { type: "circle", radius: 4 };
getArea(circle);
console.log(circle);

const rectangle: Rectangle = { type: "rectangle", length: 7, width: 4 };
getArea(rectangle);
console.log(rectangle);

const square: Square = { type: "square", width: 5 };
getArea(square);
console.log(square);

const rightTriangle: rightTriangle = {
  type: "rightTriangle",
  base: 9,
  height: 4,
};

getArea(rightTriangle);
console.log(rightTriangle);
