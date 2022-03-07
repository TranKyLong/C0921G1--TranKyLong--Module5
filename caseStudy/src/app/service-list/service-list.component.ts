import {Component, OnInit} from '@angular/core';
import {FuramaService} from './FuramaService';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})


export class ServiceListComponent implements OnInit {

  public serviceList: FuramaService[];

  constructor() {
  }

  ngOnInit(): void {
    this.serviceList = [];
    this.serviceList.push(new FuramaService(1, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(2, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(3, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(4, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(5, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(6, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(7, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(8, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(9, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(10, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(11, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(12, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(13, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(14, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(15, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(16, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(17, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(18, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(19, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(20, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(21, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(22, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(23, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(24, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
    this.serviceList.push(new FuramaService(25, 'serviceName', 50, 56, 5, 'month', '../assets/img/reosrt.jpg', 'vip', 'otherStandar', 15, 6, 'karaoke'));
  }

}

// Tên dịch vụ, Diện tích sử dụng, Chi phí thuê, Số lượng người tối đa, Kiểu thuê (bao gồm thuê theo năm, tháng, ngày, giờ).
// •	Riêng Villa sẽ có thêm thông tin: Tiêu chuẩn phòng, Mô tả tiện nghi khác, Diện tích hồ bơi, Số tầng.
// •	Riêng House sẽ có thêm thông tin: Tiêu chuẩn phòng, Mô tả tiện nghi khác, Số tầng.
// •	Riêng Phòng sẽ có thêm thông tin: Dịch vụ miễn phí đi kèm.

