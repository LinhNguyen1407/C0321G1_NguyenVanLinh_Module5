import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
      // id: new FormControl(''),
      name: new FormControl('',[Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      division: new FormControl('', [Validators.required]),
      degree: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.getPositions();
    this.getDivisions();
    this.getDegrees();
  }

  createEmployee() {
    const employee = this.employeeForm.value;
    this.employeeService.save(employee).subscribe( () => {
      this.employeeForm.reset();
      this.router.navigateByUrl('employee/list')
    });
  }

  getPositions() {
    this.employeeService.getPositions().subscribe( positions => {
      this.positions = positions;
    });
  }

  getDivisions() {
    this.employeeService.getDivisions().subscribe( divisions => {
      this.divisions = divisions;
    });
  }

  getDegrees() {
    this.employeeService.getDegrees().subscribe( degrees => {
      this.degrees = degrees;
    });
  }

}
