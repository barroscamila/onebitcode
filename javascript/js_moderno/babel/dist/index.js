"use strict";

// INSTALAR BABEL --> npm install --save-dev @babel/core @babel/cli @babel/preset-env
// CONVERSAO SIMPLES --> npx babel index.js
// ESPECIFICAR ARQUIVO DE SAIDA --> npx babel index.js --out-file dist.js
// CONVERSAO PARA VERSAO ANTIGA DO JS --> npx babel index.js --out-file dist.js --presets=@babel/preset-env
// CONVERTER VARIOS CODIGOS DE UMA VEZ, POR PASTA --> npx babel src --out-dir dist --presets=@babel/preset-env

var avarage = function avarage() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return sum / numbers.length;
};
console.log("M\xE9dia Aritim\xE9tica Simples: ".concat(avarage(3, 6, 10, 9), "."));
var weightAvarage = function weightAvarage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Aritim\xE9tica Ponderada: ".concat(weightAvarage({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
}), "."));
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  }); // colocando em ordem crescente
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  } else {
    // exemplo: [1, 2, 3, 4] -> pegando os elementos 2 e 3
    var firstMedian = orderedNumbers[middle - 1];
    var secondMedian = orderedNumbers[middle];
    return avarage(firstMedian, secondMedian);
  }
};
console.log("Mediana: ".concat(median(2, 5, 99, 4, 42, 7), "."));
console.log("Mediana: ".concat(median(15, 14, 8, 7, 3), "."));
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [ [n, qntd], [n, qntd], ... ]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0]; // valor da posição 0 do array de posição 0
};

console.log("Moda: ".concat(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4), "."));