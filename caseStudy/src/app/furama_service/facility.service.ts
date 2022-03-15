import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FuramaService} from '../model/FuramaService';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  API_URL = 'http://localhost:3000/serviceList';

  constructor(private httpClient: HttpClient) {
  }

  rentType: string[];

  getAllRentType(): string[] {
    return this.rentType = ['Năm', 'Tháng', 'Ngày', 'Giờ'];
  }


  getAll(): Observable<FuramaService[]> {
    return this.httpClient.get<FuramaService[]>(this.API_URL);
  }

  saveProduct(product) {
    return this.httpClient.patch<void>(this.API_URL + '/' + product.id, product);
  }

  createNew(product) {
    return this.httpClient.post<void>(this.API_URL, product);
  }

  findById(id: number) {
    return this.httpClient.get<FuramaService>(this.API_URL + '/' + id);
  }

  updateService(furamaService: FuramaService) {
    return this.httpClient.patch<void>(this.API_URL + '/' + furamaService.id, furamaService);
  }

  deleteService(id: number): Observable<void> {

    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }

}
