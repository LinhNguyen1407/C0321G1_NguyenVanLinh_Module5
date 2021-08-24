import { Component, OnInit } from '@angular/core';
import {Employee} from "../../employee";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  p: number = 1;

  employeeList: Employee[] = [
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

  ngOnInit(): void {
  }

}
