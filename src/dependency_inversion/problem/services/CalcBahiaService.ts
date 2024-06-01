import { GovBahia } from '../estados/GovBahia';

export class CalcBahiaService {
  private gov = new GovBahia(0.3, 10);

  calcularICMS(amount: number): number {
    const totalTax: number = amount * this.gov.taxDefault + this.gov.taxMin;
    return amount + totalTax;
  }
}
