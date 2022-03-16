import {Component, OnInit} from '@angular/core';
import {SanPham} from '../model/SanPham';
import {LoHangService} from '../service/LoHang.service';
import {LoHang} from '../model/LoHang';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  danhSachLoHang: LoHang[];
  loHang = new LoHang();
  p: number = 1;
  name: string;
  hetHan: string;
  nhapHang: string;

  constructor(private loHangService: LoHangService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.loHangService.getAll().subscribe(value => {
      this.danhSachLoHang = value;
    });
  }


  search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.danhSachLoHang = this.danhSachLoHang.filter(res => {
        return res.sanPham.ten.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
      this.p = 0;
    }
  }

  searchNgayHethan() {
    if (this.hetHan == '') {
      this.ngOnInit();
    } else {
      this.danhSachLoHang = this.danhSachLoHang.filter(res => {
        return res.ngayHetHan.toLocaleLowerCase().match(this.hetHan.toLocaleLowerCase());
      });
      this.p = 0;
    }
  }

  searchNhapHang() {
    if (this.nhapHang == '') {
      this.ngOnInit();
    } else {
      this.danhSachLoHang = this.danhSachLoHang.filter(res => {
        return res.ngayNhap.toLocaleLowerCase().match(this.nhapHang.toLocaleLowerCase());
      });
      this.p = 0;
    }
  }

  delete(id: number) {
    console.log('this id :: ' + id);
    this.loHangService.deleteLoHang(id).subscribe(() => {
        this.ngOnInit();
        this.router.navigateByUrl('');
      }
    );

  }


}
