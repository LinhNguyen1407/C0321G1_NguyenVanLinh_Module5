import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  operator1: number;
  operator2: number;
  result: number;

  constructor() { }

  ngOnInit(): void {
  }

  calculator(operand) {
    if(operand === '+') {
       this.result = this.operator1 + this.operator2;
    } else if (operand === '-') {
       this.result = this.operator1 - this.operator2;
    } else if (operand === '*') {
      this.result = this.operator1 * this.operator2;
    } else {
      this.result = this.operator1 / this.operator2;
    }
  }
}
