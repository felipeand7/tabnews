function somar(num1, num2) {
  if (typeof num1 !== "number") {
    return "Erro"
  }
  else {
    return num1 + num2;
  }
}
exports.somar = somar