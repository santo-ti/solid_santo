import { GovEstadual } from './GovEstadual';

export class GovBahia implements GovEstadual {
  readonly taxDefault: number;
  readonly taxMin: number;

  constructor(taxDefault: number, taxMin: number) {
    this.taxDefault = taxDefault;
    this.taxMin = taxMin;
  }
}
