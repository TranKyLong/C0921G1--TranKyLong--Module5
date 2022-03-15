import {Component, OnInit} from '@angular/core';
import {FuramaService} from '../../../model/FuramaService';
import {FacilityService} from '../../../furama_service/facility.service';
import {ArletComponent} from '../../../arlet/arlet.component';


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})


export class ServiceListComponent implements OnInit {
  p: number = 1;
  serviceList: FuramaService[];
  furamaServices: FuramaService;
  modalType: number;

  constructor(private facilityService: FacilityService,
              private alert: ArletComponent) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(value => this.serviceList = value
    );

  }

  findById(id: number, type: number) {
    this.modalType = type;
    this.facilityService.findById(id).subscribe(value => {
      this.furamaServices = value;
    });


  }

  deleteService(id: number) {
    console.log('this id :: ' + id);
    this.facilityService.deleteService(id).subscribe(() => {
        this.ngOnInit();
      }
    );
    this.alert.alertWithSuccess();
  }


}


// Tên dịch vụ, Diện tích sử dụng, Chi phí thuê, Số lượng người tối đa, Kiểu thuê (bao gồm thuê theo năm, tháng, ngày, giờ).
// •	Riêng Villa sẽ có thêm thông tin: Tiêu chuẩn phòng, Mô tả tiện nghi khác, Diện tích hồ bơi, Số tầng.
// •	Riêng House sẽ có thêm thông tin: Tiêu chuẩn phòng, Mô tả tiện nghi khác, Số tầng.
// •	Riêng Phòng sẽ có thêm thông tin: Dịch vụ miễn phí đi kèm.

