import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FuramaService} from '../model/FuramaService';
import {Customer} from '../model/Customer';
import {Contract} from '../model/Contract';
import {FacilityService} from './facility.service';
import {CustomerService} from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService implements OnInit {

  contract: Contract = new Contract();
  contractList: Contract[];
  customerList: Customer[];
  serviceList: FuramaService[];
  contractCustomer: Customer;
  contractFuramaService: FuramaService;
  API_URL = 'http://localhost:3000/contractList';

  constructor(private httpClient: HttpClient,
              private facilityService: FacilityService,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {

  }

  getAllCustomer() {
    this.customerService.getAll();
  }

  getAllService(){
    this.facilityService.getAll();
  }

  getAllContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.API_URL);
  }


  createNew(contract: Contract) {
    return this.httpClient.post<void>(this.API_URL, contract);
  }

  findById(id: number) {
    return this.httpClient.get<Contract>(this.API_URL + '/' + id);
  }

  updateContract(contract: Contract) {
    return this.httpClient.patch<void>(this.API_URL + '/' + contract.id, contract);
  }

  deleteContract(id: number): Observable<void> {

    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
}
