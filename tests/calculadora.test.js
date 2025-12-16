//"expect" (resultado da execuçao)."toBe"(Valor esperado do teste)

const calculadora = require("../models/calculadora")

test("somar 2+2 tem que retonar 4", () => {
  const resultado = calculadora.somar(2, 2)
  expect(resultado).toBe(4);
})

test("somar 5+200 tem que retonar 205", () => {
  const resultado = calculadora.somar(5, 200)
  expect(resultado).toBe(205);
})

test("somar 'banana' tem que retonar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100)
  expect(resultado).toBe("Erro");
})