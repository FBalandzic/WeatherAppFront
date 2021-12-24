export const mapRange = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export const arraySum = (array) =>
  array.reduce((accumulator, current) => accumulator + current);
export const arrayAverage = (array) => arraySum(array) / array.length;
