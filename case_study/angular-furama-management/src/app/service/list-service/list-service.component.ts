import { Component, OnInit } from '@angular/core';
import {Service} from "../../service";
import {ServiceService} from "../../serviceApp/service.service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  // serviceList: Service[] = [
  //   {
  //     id: 1,
  //     code: 'DV-0001',
  //     name: 'Villa01',
  //     area: 300,
  //     numFloors: 2,
  //     maxPeople: 20,
  //     cost: 20000000,
  //     standardRoom: 'Vip1',
  //     descOthers: 'View đẹp',
  //     poorArea: 55,
  //     serviceType: {
  //       id: 1,
  //       name: 'Vip'
  //     },
  //     rentType: {
  //       id: 1,
  //       name: 'Ngày'
  //     }
  //   },
  //   {
  //     id: 2,
  //     code: 'DV-0002',
  //     name: 'House01',
  //     area: 200,
  //     numFloors: 2,
  //     maxPeople: 10,
  //     cost: 10000000,
  //     standardRoom: 'Vip2',
  //     descOthers: 'View đẹp',
  //     poorArea: 30,
  //     serviceType: {
  //       id: 1,
  //       name: 'Vip'
  //     },
  //     rentType: {
  //       id: 1,
  //       name: 'Tháng'
  //     }
  //   }
  // ]

  p: number = 1;
  services: Service[] = [];

  constructor(private serviceService: ServiceService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.serviceService.getAll().subscribe(services => {
      this.services = services;
    });
  }
}
