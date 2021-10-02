import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../contract";
import {Service} from "../service";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private API_URL = 'http://localhost:3000/contracts';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.API_URL);
  }

  save(contract): Observable<Contract> {
    return this.http.post<Contract>(this.API_URL, contract);
  }
}
