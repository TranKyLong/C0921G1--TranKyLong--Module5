import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numb1: number;
  numb2: number;
  oprator: string;
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculating(): void {
    switch (this.oprator) {
      case '+':
        this.result = Number(this.numb1) + Number(this.numb2);
        break;
      case '-':
        this.result = Number(this.numb1) - Number(this.numb2);
        break;
      case '*':
        this.result = Number(this.numb1) * Number(this.numb2);
        break;
      case '/':
        this.result = Number(this.numb1) / Number(this.numb2);
        break;

    }
  }

}
