function sum(a, b) {
  return a + b;
}

function capitalize(str) {
  let lower = str.slice(1).toLowerCase();
  let upper = str[0].toUpperCase();
  return upper.concat(lower);
}

const calculator = {
  add(n1, n2) {
    return n1 + n2;
  },
  sub(n1, n2) {
    return n1 - n2;
  },
  mult(n1, n2) {
    return n1 * n2;
  },
  div(n1, n2) {
    return n1 / n2;
  },
};

function caesarCipher(str, shiftamount) {
  let caesarWord = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charCode = char.charCodeAt(0);
    let shiftedCode = charCode;

    if (charCode >= 65 && charCode <= 90) {
      shiftedCode = ((charCode - 65 + shiftamount) % 26) + 65; // Uppercase letters
    } else if (charCode >= 97 && charCode <= 122) {
      shiftedCode = ((charCode - 97 + shiftamount) % 26) + 97; // Lowercase letters
    }

    caesarWord += String.fromCharCode(shiftedCode);
  }

  return caesarWord;
}

function analyzeArray(arr) {
  return {
    average: arr.reduce((a, c) => a + c) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

export { sum, capitalize, calculator, caesarCipher, analyzeArray };
