const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  const areaTriangulo = [...rectangle1, ...rectangle2, ...rectangle3,] 
  console.log(rectangle[0] * rectangle[1]);
});