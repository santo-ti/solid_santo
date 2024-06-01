import { GovMinas } from '../estados/GovMinas';

export class CalcMinasService {
  private gov = new GovMinas(0.5, 5);

  calcularICMS(amount: number): number {
    const totalTax: number = amount * this.gov.taxDefault + this.gov.taxMin;
    return amount + totalTax;
  }
}
