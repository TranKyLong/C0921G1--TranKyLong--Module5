import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoHangService} from '../service/LoHang.service';
import {LoHang} from '../model/LoHang';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {SanPham} from '../model/SanPham';

@Component({
  selector: 'app-nhap-hang',
  templateUrl: './nhap-hang.component.html',
  styleUrls: ['./nhap-hang.component.css']
})
export class NhapHangComponent implements OnInit {
  danhSachSanPham: SanPham[];
  loHang: LoHang;

  loHangForm: FormGroup = new FormGroup(
    {
      id: new FormControl(''),
      maLoHang: new FormControl('', [Validators.required, Validators.pattern('^(LH-)[0-9]{4}$')]),
      sanPham: new FormControl('', [Validators.required]),
      soLuong: new FormControl('', [Validators.required, this.soNguyenDuong]),
      ngayNhap: new FormControl('', [Validators.required]),
      ngaySanXuat: new FormControl('', [Validators.required]),
      ngayHetHan: new FormControl('', [Validators.required]),

    }
  );

  constructor(private loHangService: LoHangService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getSanPham();
  }

  soNguyenDuong(numb: AbstractControl): any {
    const validateNumb = Number(numb.value);
    return validateNumb > 0 ? null : {checkNguyenDuong: true};
  }

  getSanPham() {
    this.loHangService.getSanPhamList().subscribe(value => {
      this.danhSachSanPham = value;
    });
  }

  submit() {
    const loHangMoi = this.loHangForm.value;
    this.loHangService.adding(loHangMoi).subscribe(value => {
      this.router.navigateByUrl('');
    });
  }


  get maLoHang() {
    return this.loHangForm.get('maLoHang');
  }

  get sanPham() {
    return this.loHangForm.get('sanPham');
  }

  get soLuong() {
    return this.loHangForm.get('soLuong');
  }

  get ngayNhap() {
    return this.loHangForm.get('ngayNhap');
  }

  get ngaySanXuat() {
    return this.loHangForm.get('ngaySanXuat');
  }

  get ngayHetHan() {
    return this.loHangForm.get('ngayHetHan');
  }
}
