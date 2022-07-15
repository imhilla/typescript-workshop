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

interface Square extends Shape{
  type: "square";
  width: number;
}

function getCircleArea(radius) {
  return radius * radius * PI;
}

function getRectangleArea(length, width) {
  return length * width;
}

function getSquareArea(width) {
  return getRectangleArea(width, width);
}

function getRightTriangleArea(base, height) {
  return (base * height) / 2;
}

function getArea(shape) {
  switch (shape.type) {
    case "circle":
      shape.area = getCircleArea(shape.radius);
      break;
    case "rectangle":
      shape.area = getRectangleArea(shape.length, shape.width);
      break;
    case "square":
      shape.area = getSquareArea(shape.width);
      break;
    case "rightTriangle":
      shape.area = getRightTriangleArea(shape.base, shape.height);
      break;
  }
}

const circle = { type: "circle", radius: 4 };
getArea(circle);
console.log(circle);

const rectangle = { type: "rectangle", length: 7, width: 4 };
getArea(rectangle);
console.log(rectangle);

const square = { type: "square", width: 5 };
getArea(square);
console.log(square);

const rightTriangle = { type: "rightTriangle", base: 9, height: 4 };
getArea(rightTriangle);
console.log(rightTriangle);
