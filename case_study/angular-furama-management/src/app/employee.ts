interface PositionEmployee {
  id: number;
  name: string;
}

interface Division {
  id: number;
  name: string;
}

interface EducationDegree {
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
