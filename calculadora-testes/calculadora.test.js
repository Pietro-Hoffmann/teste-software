const { somar, subtrair, multiplicar, dividir, porcentagem } = require('./calculadora');


test('deve somar dois números corretamente', () => {
  expect(somar(5, 3)).toBe(8);
});

test('deve subtrair dois números corretamente', () => {
  expect(subtrair(10, 4)).toBe(6);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(9, 3)).toBe(3);
});

test('deve lançar erro ao dividir por zero', () => {
  expect(() => dividir(10, 0)).toThrow('Divisor não pode ser zero');
});

// Testes com negativos
test('deve somar números negativos', () => {
  expect(somar(-5, -3)).toBe(-8);
});

test('deve subtrair números negativos', () => {
  expect(subtrair(-10, -4)).toBe(-6);
});

// Testes com null e undefined
test('deve retornar NaN se passar null na soma', () => {
  expect(somar(null, 5)).toBeNaN();
});

test('deve retornar NaN se passar undefined na multiplicação', () => {
  expect(multiplicar(undefined, 2)).toBeNaN();
});

// Testes da função porcentagem
test('deve calcular porcentagem corretamente', () => {
  expect(porcentagem(200, 50)).toBe(25);
});

test('deve lançar erro ao calcular porcentagem com divisor zero', () => {
  expect(() => porcentagem(0, 50)).toThrow('Não é possível calcular porcentagem com divisor zero');
});
