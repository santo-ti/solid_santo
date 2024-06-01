import { GovRio } from '../estados/GovRio';

export class CalcRioService {
  private gov = new GovRio(0.5, 5);

  calcularICMS(amount: number): number {
    const totalTax: number = amount * this.gov.taxDefault + this.gov.taxMin;
    return amount + totalTax;
  }
}
