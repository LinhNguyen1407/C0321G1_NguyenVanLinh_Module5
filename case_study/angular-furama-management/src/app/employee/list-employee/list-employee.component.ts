import { Component, OnInit } from '@angular/core';
import {Employee} from "../../employee";
import {EmployeeService} from "../../serviceApp/employee.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  p: number = 1;
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.employees = this.employeeService.getAll();
  }
}
