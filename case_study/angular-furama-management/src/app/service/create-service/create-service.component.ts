import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RentType, ServiceType} from "../../service";
import {ServiceService} from "../../serviceApp/service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  serviceForm: FormGroup;
  serviceTypes: ServiceType[] = [];
  rentTypes: RentType[] = [];

  constructor(private serviceService: ServiceService,
              private router: Router) {
    this.serviceForm = new FormGroup({
      code: new FormControl('',[Validators.required, Validators.pattern('^DV-\\d{4}$')]),
      name: new FormControl('',[Validators.required]),
      area: new FormControl('', [Validators.required]),
      numFloors: new FormControl('', [Validators.required]),
      maxPeople: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      descOthers: new FormControl('', [Validators.required]),
      poorArea: new FormControl('', [Validators.required]),
      serviceType: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.getServiceTypes();
    this.getRentTypes();
  }

  createService() {
    const service = this.serviceForm.value;
    this.serviceService.save(service).subscribe( () => {
      this.serviceForm.reset();
      this.router.navigateByUrl('service/list')
    });
  }

  getServiceTypes() {
    this.serviceService.getServiceTypes().subscribe( serviceTypes => {
      this.serviceTypes = serviceTypes;
    });
  }

  getRentTypes() {
    this.serviceService.getRentTypes().subscribe( rentTypes => {
      this.rentTypes = rentTypes;
    });
  }
}
