import { Injectable } from '@angular/core';
import {Division, EducationDegree, Employee, PositionEmployee} from "../employee";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // positions: PositionEmployee[] = [
  //   {id: 1, name: 'Lễ tân'},
  //   {id: 2, name: 'Quản lý'},
  //   {id: 3, name: 'Giám đốc'}
  // ]
  //
  // divisions: Division[] = [
  //   {id: 1, name: 'Phục vụ'},
  //   {id: 2, name: 'Quản lý'},
  //   {id: 3, name: 'Điều hành'}
  // ]
  //
  // degrees: EducationDegree[] = [
  //   {id: 1, name: 'Trung cấp'},
  //   {id: 2, name: 'Cao đẳng'},
  //   {id: 3, name: 'Đại học'}
  // ]
  //
  // employees: Employee[] = [
  //   {
  //     id: 1,
  //     name:'Nguyễn Thị Hoa',
  //     birthday: '2002-05-06',
  //     idCard :'111222333',
  //     salary :7,
  //     phone: '0978123456',
  //     email: 'hoa@gmail.com',
  //     address: 'ĐN',
  //     position: {
  //       id:1,
  //       name:'Lễ tân'
  //     },
  //     division: {
  //       id:1,
  //       name:'Phục vụ'
  //     },
  //     degree: {
  //       id:1,
  //       name:'Trung cấp'
  //     }
  //   },
  //   {
  //     id: 2,
  //     name:'Nguyễn Thị Ái',
  //     birthday: '2003-05-06',
  //     idCard :'111222999',
  //     salary :12,
  //     phone: '0978123456',
  //     email: 'ai@gmail.com',
  //     address: 'ĐN',
  //     position: {
  //       id:2,
  //       name:'Quản lý'
  //     },
  //     division: {
  //       id:2,
  //       name:'Quản lý'
  //     },
  //     degree: {
  //       id:2,
  //       name:'Đại học'
  //     }
  //   }
  // ]

  private API_URL = 'http://localhost:3000/employees';
  private API_URL_POSITION = 'http://localhost:3000/positions';
  private API_URL_DIVISION = 'http://localhost:3000/divisions';
  private API_URL_DEGREE =  'http://localhost:3000/degrees';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL);
  }

  getPositions(): Observable<PositionEmployee[]> {
    return this.http.get<PositionEmployee[]>(this.API_URL_POSITION);
  }

  getDivisions(): Observable<Division[]> {
    return this.http.get<Division[]>(this.API_URL_DIVISION);
  }

  getDegrees(): Observable<EducationDegree[]> {
    return this.http.get<EducationDegree[]>(this.API_URL_DEGREE);
  }

  save(employee): Observable<Employee> {
    return this.http.post<Employee>(this.API_URL, employee);
  }

  findById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.API_URL + '/' + id);
  }

  update(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.API_URL + '/' + id, employee);
  }

  delete(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.API_URL + '/' + id);
  }

  findByFields(name: any, phone: any, divisionName: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      this.API_URL + '?name_like=' + name + '&phone_like=' + phone + '&division.name_like=' + divisionName);
  }
}
