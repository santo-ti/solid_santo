// INVERSÃO DE DEPENDÊNCIA - SOLID

import { CalcBahiaService } from './services/CalcBahiaService';
import { CalcMinasService } from './services/CalcMinasService';

export class App {
  main() {
    const calcMinas = new CalcMinasService();
    const calcBahia = new CalcBahiaService();

    const productionCost: number = 50;

    const amountMinas: number = calcMinas.calcularICMS(productionCost);
    console.log(
      `O preço final do produto (custo de produção + taxas) em Minas: ${amountMinas}`
    );

    const amountBahia: number = calcBahia.calcularICMS(productionCost);
    console.log(
      `O preço final do produto (custo de produção + taxas) na Bahia: ${amountBahia}`
    );
  }
}
