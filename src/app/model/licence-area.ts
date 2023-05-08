export class LicenceArea {
  id: number;
  licenceAreaName: string;

  constructor(licenceArea: any) {
    this.id = licenceArea.id;
    this.licenceAreaName = licenceArea.licenceAreaName;

  }
}
