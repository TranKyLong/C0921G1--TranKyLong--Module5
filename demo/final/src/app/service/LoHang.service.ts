import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';
import {SanPham} from '../model/SanPham';
import {LoHang} from '../model/LoHang';

@Injectable({
  providedIn: 'root'
})
export class LoHangService {
  URL = 'http://localhost:3000/danhSachLoHang';
  SAN_PHAM_URL = 'http://localhost:3000/danhSachSanPham';

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<LoHang[]>(this.URL);
  }

  getSanPhamList() {
    return this.httpClient.get<SanPham[]>(this.SAN_PHAM_URL);
  }

  adding(loHang: LoHang) {
    return this.httpClient.post<void>(this.URL, loHang);
  }

  findById(id: number) {
    return this.httpClient.get<LoHang>(this.URL + '/' + id);
  }

  updateLoHang(loHang: LoHang) {
    return this.httpClient.patch<void>(this.URL + '/' + loHang.id, loHang);
  }

  deleteLoHang(id: number): Observable<void> {

    return this.httpClient.delete<void>(this.URL + '/' + id);
  }

}
