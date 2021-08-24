import { Component, OnInit } from '@angular/core';
import {Contract} from "../../contract";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  p: number = 1;

  contractList: Contract[] = [
    {
      id: 1,
      startDate: '2021-08-20',
      endDate: '2021-08-28',
      deposit: 5000000,
      totalMoney: 20000000,
      employeeId: 1,
      customerId: 1,
      serviceId: 1
    },
    {
      id: 2,
      startDate: '2021-08-20',
      endDate: '2021-08-25',
      deposit: 3000000,
      totalMoney: 10000000,
      employeeId: 2,
      customerId: 2,
      serviceId: 2
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
