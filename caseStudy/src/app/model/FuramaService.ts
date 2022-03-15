export class FuramaService {
  private _id: number;
  private _code:string;
  private _serviceName: string;
  private _usingArea: number;
  private _serviceCost: number;
  private _maxPeople: number;
  private _rentType: string;
  private _imgLink?: string;
  private _roomStandar?: string;
  private _otherStandar?: string;
  private _poolArea?: number;
  private _floorNumber?: number;
  private _freeService?: string;


  constructor() {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get serviceName(): string {
    return this._serviceName;
  }

  set serviceName(value: string) {
    this._serviceName = value;
  }

  get usingArea(): number {
    return this._usingArea;
  }

  set usingArea(value: number) {
    this._usingArea = value;
  }

  get serviceCost(): number {
    return this._serviceCost;
  }

  set serviceCost(value: number) {
    this._serviceCost = value;
  }

  get maxPeople(): number {
    return this._maxPeople;
  }

  set maxPeople(value: number) {
    this._maxPeople = value;
  }

  get rentType(): string {
    return this._rentType;
  }

  set rentType(value: string) {
    this._rentType = value;
  }

  get imgLink(): string {
    return this._imgLink;
  }

  set imgLink(value: string) {
    this._imgLink = value;
  }

  get roomStandar(): string {
    return this._roomStandar;
  }

  set roomStandar(value: string) {
    this._roomStandar = value;
  }

  get otherStandar(): string {
    return this._otherStandar;
  }

  set otherStandar(value: string) {
    this._otherStandar = value;
  }

  get poolArea(): number {
    return this._poolArea;
  }

  set poolArea(value: number) {
    this._poolArea = value;
  }

  get floorNumber(): number {
    return this._floorNumber;
  }

  set floorNumber(value: number) {
    this._floorNumber = value;
  }

  get freeService(): string {
    return this._freeService;
  }

  set freeService(value: string) {
    this._freeService = value;
  }
}
