import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FuramaService} from '../model/FuramaService';
import {Customer} from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer: Customer;
  customerList: Customer[];
  API_URL = 'http://localhost:3000/customerList';

  constructor(private httpClient: HttpClient) {
  }

  customerType: string[];

  getAllCustomerType(): string[] {
    return this.customerType = ['Diamond', 'Platinum', 'Gold', 'Silver', 'Bronze', 'Iron', 'Member'];
  }


  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }

  saveCustomer(customer: Customer) {
    return this.httpClient.patch<void>(this.API_URL + '/' + customer.id, customer);
  }

  createNew(customer: Customer) {
    return this.httpClient.post<void>(this.API_URL, customer);
  }

  findById(id: number) {
    return this.httpClient.get<Customer>(this.API_URL + '/' + id);
  }

  updateCustomer(customer: Customer) {
    return this.httpClient.patch<void>(this.API_URL + '/' + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<void> {

    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
}
