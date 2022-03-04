import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  color: string

  constructor() {
  }

  ngOnInit(): void {
  }


  getColorRed(): void {
    this.color = 'red';
  }

  getColorBlue(): void {
    this.color = 'blue';
  }

  getColorBlack(): void {
    this.color = 'black';
  }
}
