export class GovBahia {
  readonly taxDefault: number;
  readonly taxMin: number;

  constructor(taxDefault: number, taxMin: number) {
    this.taxDefault = taxDefault;
    this.taxMin = taxMin;
  }
}
