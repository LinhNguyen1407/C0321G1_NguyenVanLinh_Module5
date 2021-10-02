export interface ServiceType {
  id: number;
  name: string;
}

export interface RentType {
  id: number;
  name: string;
}

export interface Service {
  id: number;
  code: string;
  name: string;
  area: number;
  numFloors: number;
  maxPeople: number;
  cost: number;
  standardRoom: string;
  descOthers: string;
  poorArea: number;
  serviceType: ServiceType;
  rentType: RentType;
}

