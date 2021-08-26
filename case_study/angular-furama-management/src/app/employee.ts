export interface PositionEmployee {
  id: number;
  name: string;
}

export interface Division {
  id: number;
  name: string;
}

export interface EducationDegree {
  id: number;
  name: string;
}

export interface Employee {
  id: number;
  name: string;
  birthday: string;
  idCard :string;
  salary :number;
  phone: string;
  email: string;
  address: string;
  position: PositionEmployee;
  division: Division;
  degree: EducationDegree;
}
