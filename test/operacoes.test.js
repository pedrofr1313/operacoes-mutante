const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Completa para 50 Operações Aritméticas', () => {
  
  // === Testes para o Bloco 1 (1-10) ===
  describe('Bloco 1: Operações Básicas', () => {
    test('1. soma - deve somar dois números positivos', () => { 
      expect(soma(2, 3)).toBe(5); 
    });
    test('1. soma - deve somar números negativos', () => { 
      expect(soma(-5, -3)).toBe(-8); 
    });
    test('1. soma - deve somar zero', () => { 
      expect(soma(0, 5)).toBe(5); 
      expect(soma(5, 0)).toBe(5);
    });

    test('2. subtracao - deve subtrair dois números positivos', () => { 
      expect(subtracao(5, 2)).toBe(3); 
    });
    test('2. subtracao - resultado negativo', () => { 
      expect(subtracao(2, 5)).toBe(-3); 
    });
    test('2. subtracao - com zero', () => { 
      expect(subtracao(5, 0)).toBe(5); 
      expect(subtracao(0, 5)).toBe(-5);
    });

    test('3. multiplicacao - números positivos', () => { 
      expect(multiplicacao(3, 4)).toBe(12); 
    });
    test('3. multiplicacao - por zero', () => { 
      expect(multiplicacao(5, 0)).toBe(0); 
      expect(multiplicacao(0, 5)).toBe(0);
    });
    test('3. multiplicacao - números negativos', () => { 
      expect(multiplicacao(-3, 4)).toBe(-12);
      expect(multiplicacao(-3, -4)).toBe(12);
    });

    test('4. divisao - divisão simples', () => {
      expect(divisao(10, 2)).toBe(5);
    });
    test('4. divisao - divisão por zero deve lançar erro', () => {
      expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
    });
    test('4. divisao - divisão resultando em decimal', () => {
      expect(divisao(7, 2)).toBe(3.5);
    });
    test('4. divisao - divisão de negativo', () => {
      expect(divisao(-10, 2)).toBe(-5);
      expect(divisao(10, -2)).toBe(-5);
    });

    test('5. potencia - expoente positivo', () => { 
      expect(potencia(2, 3)).toBe(8); 
    });
    test('5. potencia - expoente zero', () => { 
      expect(potencia(5, 0)).toBe(1); 
    });
    test('5. potencia - expoente negativo', () => { 
      expect(potencia(2, -2)).toBe(0.25); 
    });
    test('5. potencia - base zero', () => { 
      expect(potencia(0, 5)).toBe(0); 
    });

    test('6. raizQuadrada - quadrado perfeito', () => { 
      expect(raizQuadrada(16)).toBe(4); 
    });
    test('6. raizQuadrada - não perfeito', () => { 
      expect(raizQuadrada(2)).toBeCloseTo(1.414, 2); 
    });
    test('6. raizQuadrada - de zero', () => { 
      expect(raizQuadrada(0)).toBe(0); 
    });
    test('6. raizQuadrada - número negativo deve lançar erro', () => {
      expect(() => raizQuadrada(-4)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
    });

    test('7. restoDivisao - resto comum', () => { 
      expect(restoDivisao(10, 3)).toBe(1); 
    });
    test('7. restoDivisao - resto zero', () => { 
      expect(restoDivisao(10, 5)).toBe(0); 
    });
    test('7. restoDivisao - com negativos', () => { 
      expect(restoDivisao(-10, 3)).toBe(-1); 
    });

    test('8. fatorial - número maior que 1', () => { 
      expect(fatorial(4)).toBe(24); 
    });
    test('8. fatorial - de zero', () => { 
      expect(fatorial(0)).toBe(1); 
    });
    test('8. fatorial - de um', () => { 
      expect(fatorial(1)).toBe(1); 
    });
    test('8. fatorial - de dois', () => { 
      expect(fatorial(2)).toBe(2); 
    });
    test('8. fatorial - de três', () => { 
      expect(fatorial(3)).toBe(6); 
    });
    test('8. fatorial - negativo deve lançar erro', () => {
      expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
    });
    test('8. fatorial - número maior', () => { 
      expect(fatorial(5)).toBe(120); 
    });
    test('8. fatorial - resultado diferente de 1 para n>1', () => { 
      expect(fatorial(2)).not.toBe(1); 
    });

    test('9. mediaArray - múltiplos elementos', () => { 
      expect(mediaArray([10, 20, 30])).toBe(20); 
    });
    test('9. mediaArray - um elemento', () => { 
      expect(mediaArray([5])).toBe(5); 
    });
    test('9. mediaArray - array vazio', () => { 
      expect(mediaArray([])).toBe(0); 
    });
    test('9. mediaArray - com negativos', () => { 
      expect(mediaArray([-10, 10, 0])).toBe(0); 
    });

    test('10. somaArray - múltiplos elementos', () => { 
      expect(somaArray([1, 2, 3])).toBe(6); 
    });
    test('10. somaArray - array vazio', () => { 
      expect(somaArray([])).toBe(0); 
    });
    test('10. somaArray - um elemento', () => { 
      expect(somaArray([7])).toBe(7); 
    });
    test('10. somaArray - com negativos', () => { 
      expect(somaArray([5, -3, 2])).toBe(4); 
    });
  });

  // === Testes para o Bloco 2 (11-20) ===
  describe('Bloco 2: Operações em Arrays e Checagens', () => {
    test('11. maximoArray - valor máximo', () => { 
      expect(maximoArray([1, 50, 10])).toBe(50); 
    });
    test('11. maximoArray - todos iguais', () => { 
      expect(maximoArray([5, 5, 5])).toBe(5); 
    });
    test('11. maximoArray - com negativos', () => { 
      expect(maximoArray([-10, -5, -20])).toBe(-5); 
    });
    test('11. maximoArray - array vazio deve lançar erro com mensagem específica', () => {
      expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
    });

    test('12. minimoArray - valor mínimo', () => { 
      expect(minimoArray([10, 2, 100])).toBe(2); 
    });
    test('12. minimoArray - todos iguais', () => { 
      expect(minimoArray([3, 3, 3])).toBe(3); 
    });
    test('12. minimoArray - com negativos', () => { 
      expect(minimoArray([5, -10, 0])).toBe(-10); 
    });
    test('12. minimoArray - array vazio deve lançar erro com mensagem específica', () => {
      expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
    });

    test('13. valorAbsoluto - número negativo', () => { 
      expect(valorAbsoluto(-5)).toBe(5); 
    });
    test('13. valorAbsoluto - número positivo', () => { 
      expect(valorAbsoluto(5)).toBe(5); 
    });
    test('13. valorAbsoluto - zero', () => { 
      expect(valorAbsoluto(0)).toBe(0); 
    });

    test('14. arredondar - para cima', () => { 
      expect(arredondar(9.8)).toBe(10); 
    });
    test('14. arredondar - para baixo', () => { 
      expect(arredondar(9.2)).toBe(9); 
    });
    test('14. arredondar - meio (.5)', () => { 
      expect(arredondar(9.5)).toBe(10); 
    });

    test('15. isPar - número par', () => { 
      expect(isPar(100)).toBe(true); 
    });
    test('15. isPar - número ímpar', () => { 
      expect(isPar(7)).toBe(false); 
    });
    test('15. isPar - zero', () => { 
      expect(isPar(0)).toBe(true); 
    });
    test('15. isPar - negativo par', () => { 
      expect(isPar(-4)).toBe(true); 
    });

    test('16. isImpar - número ímpar', () => { 
      expect(isImpar(7)).toBe(true); 
    });
    test('16. isImpar - número par', () => { 
      expect(isImpar(8)).toBe(false); 
    });
    test('16. isImpar - zero', () => { 
      expect(isImpar(0)).toBe(false); 
    });
    test('16. isImpar - negativo ímpar', () => { 
      expect(isImpar(-3)).toBe(true); 
    });

    test('17. calcularPorcentagem - porcentagem simples', () => { 
      expect(calcularPorcentagem(50, 200)).toBe(100); 
    });
    test('17. calcularPorcentagem - porcentagem zero', () => { 
      expect(calcularPorcentagem(0, 100)).toBe(0); 
    });
    test('17. calcularPorcentagem - valor zero', () => { 
      expect(calcularPorcentagem(50, 0)).toBe(0); 
    });

    test('18. aumentarPorcentagem - aumento simples', () => { 
      expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); 
    });
    test('18. aumentarPorcentagem - aumento zero', () => { 
      expect(aumentarPorcentagem(100, 0)).toBe(100); 
    });
    test('18. aumentarPorcentagem - aumento 100%', () => { 
      expect(aumentarPorcentagem(50, 100)).toBe(100); 
    });

    test('19. diminuirPorcentagem - diminuição simples', () => { 
      expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); 
    });
    test('19. diminuirPorcentagem - diminuição zero', () => { 
      expect(diminuirPorcentagem(100, 0)).toBe(100); 
    });
    test('19. diminuirPorcentagem - diminuição 50%', () => { 
      expect(diminuirPorcentagem(100, 50)).toBe(50); 
    });

    test('20. inverterSinal - número positivo', () => { 
      expect(inverterSinal(42)).toBe(-42); 
    });
    test('20. inverterSinal - número negativo', () => { 
      expect(inverterSinal(-42)).toBe(42); 
    });
    test('20. inverterSinal - zero', () => { 
      expect(inverterSinal(0)).toBe(-0); 
    });
  });

  // === Testes para o Bloco 3 (21-30) ===
  describe('Bloco 3: Funções Trigonométricas e Logarítmicas', () => {
    test('21. seno - de zero', () => { 
      expect(seno(0)).toBe(0); 
    });
    test('21. seno - de PI/2', () => { 
      expect(seno(Math.PI / 2)).toBeCloseTo(1); 
    });
    test('21. seno - de PI', () => { 
      expect(seno(Math.PI)).toBeCloseTo(0); 
    });

    test('22. cosseno - de zero', () => { 
      expect(cosseno(0)).toBe(1); 
    });
    test('22. cosseno - de PI/2', () => { 
      expect(cosseno(Math.PI / 2)).toBeCloseTo(0); 
    });
    test('22. cosseno - de PI', () => { 
      expect(cosseno(Math.PI)).toBeCloseTo(-1); 
    });

    test('23. tangente - de zero', () => { 
      expect(tangente(0)).toBe(0); 
    });
    test('23. tangente - de PI/4', () => { 
      expect(tangente(Math.PI / 4)).toBeCloseTo(1); 
    });

    test('24. logaritmoNatural - de Euler', () => { 
      expect(logaritmoNatural(Math.E)).toBe(1); 
    });
    test('24. logaritmoNatural - de 1', () => { 
      expect(logaritmoNatural(1)).toBe(0); 
    });
    test('24. logaritmoNatural - maior que 1', () => { 
      expect(logaritmoNatural(10)).toBeCloseTo(2.302); 
    });

    test('25. logaritmoBase10 - de 100', () => { 
      expect(logaritmoBase10(100)).toBe(2); 
    });
    test('25. logaritmoBase10 - de 10', () => { 
      expect(logaritmoBase10(10)).toBe(1); 
    });
    test('25. logaritmoBase10 - de 1', () => { 
      expect(logaritmoBase10(1)).toBe(0); 
    });

    test('26. arredondarParaBaixo - decimal', () => { 
      expect(arredondarParaBaixo(5.9)).toBe(5); 
    });
    test('26. arredondarParaBaixo - inteiro', () => { 
      expect(arredondarParaBaixo(5)).toBe(5); 
    });
    test('26. arredondarParaBaixo - negativo', () => { 
      expect(arredondarParaBaixo(-5.1)).toBe(-6); 
    });

    test('27. arredondarParaCima - decimal', () => { 
      expect(arredondarParaCima(5.1)).toBe(6); 
    });
    test('27. arredondarParaCima - inteiro', () => { 
      expect(arredondarParaCima(5)).toBe(5); 
    });
    test('27. arredondarParaCima - negativo', () => { 
      expect(arredondarParaCima(-5.9)).toBe(-5); 
    });

    test('28. hipotenusa - triângulo 3-4-5', () => { 
      expect(hipotenusa(3, 4)).toBe(5); 
    });
    test('28. hipotenusa - catetos iguais', () => { 
      expect(hipotenusa(1, 1)).toBeCloseTo(1.414); 
    });
    test('28. hipotenusa - com zero', () => { 
      expect(hipotenusa(0, 5)).toBe(5); 
    });

    test('29. grausParaRadianos - 180 graus', () => { 
      expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); 
    });
    test('29. grausParaRadianos - 90 graus', () => { 
      expect(grausParaRadianos(90)).toBeCloseTo(Math.PI / 2); 
    });
    test('29. grausParaRadianos - 0 graus', () => { 
      expect(grausParaRadianos(0)).toBe(0); 
    });

    test('30. radianosParaGraus - PI radianos', () => { 
      expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); 
    });
    test('30. radianosParaGraus - PI/2 radianos', () => { 
      expect(radianosParaGraus(Math.PI / 2)).toBeCloseTo(90); 
    });
    test('30. radianosParaGraus - 0 radianos', () => { 
      expect(radianosParaGraus(0)).toBe(0); 
    });
  });

  // === Testes para o Bloco 4 (31-40) ===
  describe('Bloco 4: Teoria dos Números e Sequências', () => {
    test('31. mdc - números coprimos', () => { 
      expect(mdc(10, 5)).toBe(5); 
    });
    test('31. mdc - números iguais', () => { 
      expect(mdc(7, 7)).toBe(7); 
    });
    test('31. mdc - com 1', () => { 
      expect(mdc(13, 1)).toBe(1); 
    });
    test('31. mdc - ordem invertida', () => { 
      expect(mdc(5, 10)).toBe(5); 
    });

    test('32. mmc - múltiplos simples', () => { 
      expect(mmc(10, 5)).toBe(10); 
    });
    test('32. mmc - números coprimos', () => { 
      expect(mmc(3, 5)).toBe(15); 
    });
    test('32. mmc - números iguais', () => { 
      expect(mmc(6, 6)).toBe(6); 
    });

    test('33. isPrimo - número primo', () => { 
      expect(isPrimo(7)).toBe(true); 
    });
    test('33. isPrimo - número composto', () => { 
      expect(isPrimo(8)).toBe(false); 
    });
    test('33. isPrimo - número 1', () => { 
      expect(isPrimo(1)).toBe(false); 
    });
    test('33. isPrimo - número 2', () => { 
      expect(isPrimo(2)).toBe(true); 
    });
    test('33. isPrimo - zero', () => { 
      expect(isPrimo(0)).toBe(false); 
    });
    test('33. isPrimo - negativo', () => { 
      expect(isPrimo(-5)).toBe(false); 
    });

    test('34. fibonacci - 10º termo', () => { 
      expect(fibonacci(10)).toBe(55); 
    });
    test('34. fibonacci - 0', () => { 
      expect(fibonacci(0)).toBe(0); 
    });
    test('34. fibonacci - 1', () => { 
      expect(fibonacci(1)).toBe(1); 
    });
    test('34. fibonacci - 5º termo', () => { 
      expect(fibonacci(5)).toBe(5); 
    });

    test('35. produtoArray - múltiplos números', () => { 
      expect(produtoArray([2, 3, 4])).toBe(24); 
    });
    test('35. produtoArray - array vazio retorna 1', () => { 
      expect(produtoArray([])).toBe(1); 
    });
    test('35. produtoArray - array vazio não deve lançar erro', () => { 
      expect(() => produtoArray([])).not.toThrow();
    });
    test('35. produtoArray - array com 1 elemento não retorna valor inicial', () => { 
      const result = produtoArray([5]);
      expect(result).toBe(5);
      expect(result).not.toBe(1);
    });
    test('35. produtoArray - com zero', () => { 
      expect(produtoArray([5, 0, 3])).toBe(0); 
    });
    test('35. produtoArray - um elemento', () => { 
      expect(produtoArray([7])).toBe(7); 
    });
    test('35. produtoArray - dois elementos', () => { 
      expect(produtoArray([3, 5])).toBe(15); 
    });
    test('35. produtoArray - três elementos diferentes de 1', () => { 
      const result = produtoArray([2, 3, 4]);
      expect(result).toBe(24);
      expect(result).not.toBe(1);
    });

    test('36. clamp - valor dentro do intervalo', () => { 
      expect(clamp(5, 0, 10)).toBe(5); 
    });
    test('36. clamp - valor abaixo do mínimo', () => { 
      expect(clamp(-5, 0, 10)).toBe(0); 
    });
    test('36. clamp - valor acima do máximo', () => { 
      expect(clamp(15, 0, 10)).toBe(10); 
    });
    test('36. clamp - valor igual ao mínimo (boundary)', () => { 
      expect(clamp(0, 0, 10)).toBe(0); 
    });
    test('36. clamp - valor logo abaixo do mínimo', () => { 
      expect(clamp(-0.1, 0, 10)).toBe(0); 
    });
    test('36. clamp - valor igual ao máximo', () => { 
      expect(clamp(10, 0, 10)).toBe(10); 
    });
    test('36. clamp - valor logo acima do máximo', () => { 
      expect(clamp(10.1, 0, 10)).toBe(10); 
    });
    test('36. clamp - valor muito abaixo do mínimo retorna min', () => { 
      expect(clamp(-100, 0, 10)).toBe(0); 
    });
    test('36. clamp - valor levemente dentro do intervalo', () => { 
      expect(clamp(0.1, 0, 10)).toBe(0.1); 
    });

    test('37. isDivisivel - divisível', () => { 
      expect(isDivisivel(10, 2)).toBe(true); 
    });
    test('37. isDivisivel - não divisível', () => { 
      expect(isDivisivel(10, 3)).toBe(false); 
    });
    test('37. isDivisivel - por 1', () => { 
      expect(isDivisivel(7, 1)).toBe(true); 
    });
    test('37. isDivisivel - zero por número', () => { 
      expect(isDivisivel(0, 5)).toBe(true); 
    });

    test('38. celsiusParaFahrenheit - ponto de congelamento', () => { 
      expect(celsiusParaFahrenheit(0)).toBe(32); 
    });
    test('38. celsiusParaFahrenheit - ponto de ebulição', () => { 
      expect(celsiusParaFahrenheit(100)).toBe(212); 
    });
    test('38. celsiusParaFahrenheit - negativo', () => { 
      expect(celsiusParaFahrenheit(-40)).toBe(-40); 
    });

    test('39. fahrenheitParaCelsius - ponto de congelamento', () => { 
      expect(fahrenheitParaCelsius(32)).toBe(0); 
    });
    test('39. fahrenheitParaCelsius - ponto de ebulição', () => { 
      expect(fahrenheitParaCelsius(212)).toBe(100); 
    });
    test('39. fahrenheitParaCelsius - negativo', () => { 
      expect(fahrenheitParaCelsius(-40)).toBe(-40); 
    });

    test('40. inverso - de um número', () => { 
      expect(inverso(4)).toBe(0.25); 
    });
    test('40. inverso - de 1', () => { 
      expect(inverso(1)).toBe(1); 
    });
    test('40. inverso - de -2', () => { 
      expect(inverso(-2)).toBe(-0.5); 
    });
    test('40. inverso - de zero deve lançar erro', () => {
      expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
    });
  });

  // === Testes para o Bloco 5 (41-50) ===
  describe('Bloco 5: Geometria e Lógica de Comparação', () => {
    test('41. areaCirculo - raio 10', () => { 
      expect(areaCirculo(10)).toBeCloseTo(314.159, 2); 
    });
    test('41. areaCirculo - raio 1', () => { 
      expect(areaCirculo(1)).toBeCloseTo(Math.PI); 
    });
    test('41. areaCirculo - raio 0', () => { 
      expect(areaCirculo(0)).toBe(0); 
    });

    test('42. areaRetangulo - retângulo normal', () => { 
      expect(areaRetangulo(5, 4)).toBe(20); 
    });
    test('42. areaRetangulo - quadrado', () => { 
      expect(areaRetangulo(5, 5)).toBe(25); 
    });
    test('42. areaRetangulo - com zero', () => { 
      expect(areaRetangulo(5, 0)).toBe(0); 
    });

    test('43. perimetroRetangulo - retângulo normal', () => { 
      expect(perimetroRetangulo(5, 4)).toBe(18); 
    });
    test('43. perimetroRetangulo - quadrado', () => { 
      expect(perimetroRetangulo(5, 5)).toBe(20); 
    });
    test('43. perimetroRetangulo - com 1', () => { 
      expect(perimetroRetangulo(1, 1)).toBe(4); 
    });

    test('44. isMaiorQue - true', () => { 
      expect(isMaiorQue(10, 5)).toBe(true); 
    });
    test('44. isMaiorQue - false', () => { 
      expect(isMaiorQue(5, 10)).toBe(false); 
    });
    test('44. isMaiorQue - iguais', () => { 
      expect(isMaiorQue(5, 5)).toBe(false); 
    });

    test('45. isMenorQue - true', () => { 
      expect(isMenorQue(5, 10)).toBe(true); 
    });
    test('45. isMenorQue - false', () => { 
      expect(isMenorQue(10, 5)).toBe(false); 
    });
    test('45. isMenorQue - iguais', () => { 
      expect(isMenorQue(5, 5)).toBe(false); 
    });

    test('46. isEqual - iguais', () => { 
      expect(isEqual(7, 7)).toBe(true); 
    });
    test('46. isEqual - diferentes', () => { 
      expect(isEqual(7, 8)).toBe(false); 
    });
    test('46. isEqual - zero', () => { 
      expect(isEqual(0, 0)).toBe(true); 
    });

    test('47. medianaArray - array ímpar ordenado', () => { 
      expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); 
    });
    test('47. medianaArray - array par ordenado', () => { 
      expect(medianaArray([1, 2, 3, 4])).toBe(2.5); 
    });
    test('47. medianaArray - array desordenado', () => { 
      expect(medianaArray([5, 1, 3, 2, 4])).toBe(3); 
    });
    test('47. medianaArray - um elemento', () => { 
      expect(medianaArray([7])).toBe(7); 
    });
    test('47. medianaArray - array vazio deve lançar erro', () => {
      expect(() => medianaArray([])).toThrow();
    });

    test('48. dobro - número positivo', () => { 
      expect(dobro(10)).toBe(20); 
    });
    test('48. dobro - número negativo', () => { 
      expect(dobro(-5)).toBe(-10); 
    });
    test('48. dobro - zero', () => { 
      expect(dobro(0)).toBe(0); 
    });

    test('49. triplo - número positivo', () => { 
      expect(triplo(10)).toBe(30); 
    });
    test('49. triplo - número negativo', () => { 
      expect(triplo(-5)).toBe(-15); 
    });
    test('49. triplo - zero', () => { 
      expect(triplo(0)).toBe(0); 
    });

    test('50. metade - número par', () => { 
      expect(metade(20)).toBe(10); 
    });
    test('50. metade - número ímpar', () => { 
      expect(metade(7)).toBe(3.5); 
    });
    test('50. metade - zero', () => { 
      expect(metade(0)).toBe(0); 
    });
  });
});