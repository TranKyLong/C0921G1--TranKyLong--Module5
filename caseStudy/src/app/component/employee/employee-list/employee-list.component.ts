import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from '../../../furama_service/employee-service.service';
import {Router} from '@angular/router';
import {Employee} from '../../../model/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  positionList = this.employeService.getAllPosistion();
  divionList = this.employeService.getAllDivision();
  educationList = this.employeService.getAllEdu();
  employee: Employee = new Employee();
  employeeList: Employee[];

  constructor(private employeService: EmployeeServiceService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.employeService.getAll().subscribe(value => this.employeeList = value
    );

  }

  findById(id: number) {
    this.employeService.findById(id).subscribe(value => {
      this.employee = value;
    });
  }

  deleteEmployee(id: number) {
    console.log('this id :: ' + id);
    this.employeService.deleteEmployee(id).subscribe(() => {
        this.ngOnInit();
        this.router.navigateByUrl('employee/list');
      }
    );

  }


}
