import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentType, Service, ServiceType} from "../service";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private API_URL = 'http://localhost:3000/services';
  private API_URL_RT = 'http://localhost:3000/rentTypes';
  private API_URL_ST = 'http://localhost:3000/serviceTypes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Service[]> {
    return this.http.get<Service[]>(this.API_URL);
  }

  getRentTypes(): Observable<RentType[]> {
    return this.http.get<RentType[]>(this.API_URL_RT);
  }

  getServiceTypes(): Observable<ServiceType[]> {
    return this.http.get<ServiceType[]>(this.API_URL_ST);
  }

  save(service): Observable<Service> {
    return this.http.post<Service>(this.API_URL, service);
  }
}
