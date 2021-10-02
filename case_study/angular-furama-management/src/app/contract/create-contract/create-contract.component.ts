import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContractService} from "../../serviceApp/contract.service";
import {Router} from "@angular/router";
import {DatePipe, formatDate} from "@angular/common";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css'],
  providers: [DatePipe]
})
export class CreateContractComponent implements OnInit {

  contractForm: FormGroup;

  constructor(private contractService: ContractService,
              private router: Router) {
    this.contractForm = new FormGroup({
      dateGroup: new FormGroup({
        startDate: new FormControl('', [Validators.required, this.checkNotPastDate]),
        endDate: new FormControl('', [Validators.required]),
      }, this.checkEndDate),
      deposit: new FormControl('', [Validators.required]),
      employeeId: new FormControl('', [Validators.required]),
      customerId: new FormControl('', [Validators.required]),
      serviceId: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  createContract() {
    const contract = this.contractForm.value;
    this.contractService.save(contract).subscribe(() => {
      this.contractForm.reset();
      this.router.navigateByUrl('contract/list')
    });
  }

  checkNotPastDate(startDateControl: AbstractControl): any {
    const startDate = startDateControl.value;
    const currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    if(startDate < currentDate) {
      return {inValidDate: true}
    }
    return null;
  }

  checkEndDate (dateControl: AbstractControl): any {
    const date = dateControl.value;
    return date.startDate <= date.endDate ? null: {inValidEndDate: true};
  }
}
