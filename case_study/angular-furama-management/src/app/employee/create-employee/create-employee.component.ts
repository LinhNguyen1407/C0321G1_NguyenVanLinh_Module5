import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EmployeeService} from "../../serviceApp/employee.service";
import {Router} from "@angular/router";
import {Division, EducationDegree, PositionEmployee} from "../../employee";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  positions: PositionEmployee[] = [];
  divisions: Division[] = [];
  degrees: EducationDegree[] = [];

  constructor(private employeeService: EmployeeService,
              private router: Router) {
    this.employeeForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      birthday: new FormControl(''),
      idCard: new FormControl(''),
      salary: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      position: new FormControl(''),
      division: new FormControl(''),
      degree: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.getPositions();
    this.getDivisions();
    this.getDegrees();
  }

  createEmployee() {
    const employee = this.employeeForm.value;
    this.employeeService.saveEmployee(employee);
    this.employeeForm.reset();
    this.router.navigateByUrl('employee/list')
  }

  getPositions() {
    this.positions = this.employeeService.getPositions();
  }

  getDivisions() {
    this.divisions = this.employeeService.getDivisions();
  }

  getDegrees() {
    this.degrees = this.employeeService.getDegrees()
  }

}
