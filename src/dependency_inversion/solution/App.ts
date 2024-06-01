// INVERSÃO DE DEPENDÊNCIA - SOLID

import { GovBahia } from './estados/GovBahia';
import { GovMinas } from './estados/GovMinas';
import { CalcEstadoService } from './services/CalcEstadoService';

export class App {
  main() {
    const govMinas = new GovMinas(0.5, 5);
    const govBahia = new GovBahia(0.3, 10);

    const productionCost: number = 50;

    const calcMinas = new CalcEstadoService(govMinas);
    const amountMinas: number = calcMinas.calcularICMS(productionCost);
    console.log(
      `O preço final do produto (custo de produção + taxas) em Minas: ${amountMinas}`
    );

    const calcBahia = new CalcEstadoService(govBahia);
    const amountBahia: number = calcBahia.calcularICMS(productionCost);
    console.log(
      `O preço final do produto (custo de produção + taxas) na Bahia: ${amountBahia}`
    );
  }
}
