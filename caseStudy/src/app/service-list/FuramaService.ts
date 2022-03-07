export class FuramaService {
  serviceId: number;
  serviceName: string;
  usingArea: number;
  serviceCost: number;
  maxPeople: number;
  rentType: string;
  imgLink: string;
  roomStandar?: string;
  otherStandar?: string;
  poolArea?: number;
  floorNumber?: number;
  freeService?: string;


  // tslint:disable-next-line:max-line-length
  constructor(serviceId: number, serviceName: string, usingArea: number, serviceCost: number, maxPeople: number, rentType: string, imgLink: string, roomStandar?: string, otherStandar?: string, poolArea?: number, floorNumber?: number, freeService?: string) {
    this.serviceId = serviceId;
    this.serviceName = serviceName;
    this.usingArea = usingArea;
    this.serviceCost = serviceCost;
    this.maxPeople = maxPeople;
    this.rentType = rentType;
    this.roomStandar = roomStandar;
    this.otherStandar = otherStandar;
    this.poolArea = poolArea;
    this.floorNumber = floorNumber;
    this.freeService = freeService;
    this.imgLink = imgLink;
  }
}
