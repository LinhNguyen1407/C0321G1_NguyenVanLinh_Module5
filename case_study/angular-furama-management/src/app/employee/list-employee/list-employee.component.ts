import {Component, OnInit} from '@angular/core';
import {Division, Employee} from "../../employee";
import {EmployeeService} from "../../serviceApp/employee.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  p: number = 1;
  employees: Employee[] = [];
  divisions: Division[] = [];
  // name: any;
  // phone: any;
  // division: any;
  // divisionName: any;

  constructor(private employeeService: EmployeeService) {
    this.getDivisions();
    this.getAll();
  }

  ngOnInit(): void {

  }

  getAll() {
    this.employeeService.getAll().subscribe(employees => {
      this.employees = employees;
    });
  }

  getDivisions() {
    this.employeeService.getDivisions().subscribe( divisions => {
      this.divisions = divisions;
    });
  }

  search(name: string, phone: string, divisionName: string) {
    name = typeof name === "undefined" ? '': name;
    phone = typeof phone === "undefined" ? '': phone;
    // divisionName = typeof phone === "undefined" ? '': divisionName;
    // this.divisionName = typeof division === "undefined" || '' ? '': division.name
    // this.divisionName = typeof this.divisionName === "undefined" ? '': this.divisionName;
    this.employeeService.findByFields(name, phone, divisionName).subscribe(employees => {
      this.employees = employees;
      this.ngOnInit();
      this.p = 1;
    })
  }
}
