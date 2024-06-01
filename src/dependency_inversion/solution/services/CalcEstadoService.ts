import { GovEstadual } from '../estados/GovEstadual';

export class CalcEstadoService {
  private gov: GovEstadual;

  constructor(gov: GovEstadual) {
    this.gov = gov;
  }

  calcularICMS(amount: number): number {
    return amount + (amount * this.gov.taxDefault + this.gov.taxMin);
  }
}
