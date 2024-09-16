// https://leetcode.com/problems/integer-to-roman/
// Language: JavaScript
// Runtime: 115 MS
// Memory: 53.77 MB

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let roman = "";

  if (num >= 1000) {
      const thousandPlace = Math.floor(num / 1000);
      roman += "M".repeat(thousandPlace);
  }

  if (num >= 100) {
      const hundredsPlace = Math.floor((num % 1000) / 100);
      if (hundredsPlace == 9) {
          roman += "CM";
      } else if (hundredsPlace >= 5) {
          roman += "D" + "C".repeat(hundredsPlace - 5);
      } else if (hundredsPlace == 4) {
          roman += "CD";
      } else {
          roman += "C".repeat(hundredsPlace);
      }
  }

  if (num >= 10) {
      const tensPlace = Math.floor((num % 100) / 10);
      if (tensPlace == 9) {
          roman += "XC";
      } else if (tensPlace >= 5) {
          roman += "L" + "X".repeat(tensPlace - 5);
      } else if (tensPlace == 4) {
          roman += "XL";
      } else {
          roman += "X".repeat(tensPlace);
      }
  }

  const onesPlace = num % 10;
  if (onesPlace == 9) {
      roman += "IX";
  } else if (onesPlace >= 5) {
      roman += "V" + "I".repeat(onesPlace - 5);
  } else if (onesPlace == 4) {
      roman += "IV";
  } else {
      roman += "I".repeat(onesPlace);
  }

  return roman
};