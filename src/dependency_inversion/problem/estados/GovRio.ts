export class GovRio {
  readonly taxDefault: number;
  readonly taxMin: number;

  constructor(taxDefault: number, taxMin: number) {
    this.taxDefault = taxDefault;
    this.taxMin = taxMin;
  }
}
