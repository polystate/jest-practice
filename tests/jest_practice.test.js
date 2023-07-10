import {
  sum,
  capitalize,
  calculator,
  caesarCipher,
  analyzeArray,
} from "../src/jest_practice.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("string returns capital first letter and rest lowercase", () => {
  expect(capitalize("hElLo")).toBe("Hello");
});

test("a calculator obj with four operands and returns correct result", () => {
  expect(calculator.add(2, 4)).toBe(6);
  expect(calculator.sub(7, 4)).toBe(3);
  expect(calculator.mult(2, 4)).toBe(8);
  expect(calculator.div(10, 5)).toBe(2);
});

test("a function that takes a string and a shift factor and returns with each character shifted", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("an array function that takes a list of numbers and returns an obj with props: average, min, max, and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
