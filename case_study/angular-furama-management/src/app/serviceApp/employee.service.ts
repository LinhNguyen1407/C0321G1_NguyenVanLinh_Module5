import { Injectable } from '@angular/core';
import {Division, EducationDegree, Employee, PositionEmployee} from "../employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  positions: PositionEmployee[] = [
    {id: 1, name: 'Lễ tân'},
    {id: 2, name: 'Quản lý'},
    {id: 3, name: 'Giám đốc'}
  ]

  divisions: Division[] = [
    {id: 1, name: 'Phục vụ'},
    {id: 2, name: 'Quản lý'},
    {id: 3, name: 'Điều hành'}
  ]

  degrees: EducationDegree[] = [
    {id: 1, name: 'Trung cấp'},
    {id: 2, name: 'Cao đẳng'},
    {id: 3, name: 'Đại học'}
  ]

  employees: Employee[] = [
    {
      id: 1,
      name:'Nguyễn Thị Hoa',
      birthday: '2002-05-06',
      idCard :'111222333',
      salary :7,
      phone: '0978123456',
      email: 'hoa@gmail.com',
      address: 'ĐN',
      position: {
        id:1,
        name:'Lễ tân'
      },
      division: {
        id:1,
        name:'Phục vụ'
      },
      degree: {
        id:1,
        name:'Trung cấp'
      }
    },
    {
      id: 2,
      name:'Nguyễn Thị Ái',
      birthday: '2003-05-06',
      idCard :'111222999',
      salary :12,
      phone: '0978123456',
      email: 'ai@gmail.com',
      address: 'ĐN',
      position: {
        id:2,
        name:'Quản lý'
      },
      division: {
        id:2,
        name:'Quản lý'
      },
      degree: {
        id:2,
        name:'Đại học'
      }
    }
  ]

  constructor() { }

  getAll() {
    return this.employees;
  }

  getPositions() {
    return this.positions;
  }

  getDivisions() {
     return this.divisions;
  }

  getDegrees() {
    return this.degrees;
  }

  saveEmployee(employee) {
    this.employees.push(employee);
  }

  findById(id: number) {
    return this.employees.find(employee => employee.id === id);
  }

  updateEmployee(id: number, employee: Employee) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id === id) {
        this.employees[i] = employee;
      }
    }
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(employee => {
      return employee.id !== id;
    });
  }

}
