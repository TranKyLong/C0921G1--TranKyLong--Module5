import {Injectable} from '@angular/core';
import {Customer} from '../model/Customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  employee: Employee;
  employeeList: Employee[];
  API_URL = 'http://localhost:3000/employeeList';

  constructor(private httpClient: HttpClient) {
  }

  customerType: string[];

  getAllEdu(): string[] {

    return ['Trung cấp', 'Cao đẳng', 'Đại học', 'sau đại học'];
  }

  getAllPosistion(): string[] {
    return ['Lễ tân', 'phục vụ', 'chuyên viên', 'giám sát', 'quản lý', 'giám đốc'];
  }

  getAllDivision(): string[] {

    return ['Sale – Marketing', 'Hành Chính', 'Phục vụ', 'Quản lý'];
  }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_URL);
  }

  createNew(employee: Employee) {
    return this.httpClient.post<void>(this.API_URL, employee);
  }

  findById(id: number) {
    return this.httpClient.get<Employee>(this.API_URL + '/' + id);
  }

  updateEmployee(employee: Employee) {
    return this.httpClient.patch<void>(this.API_URL + '/' + employee.id, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
}
