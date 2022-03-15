import {Component, OnInit} from '@angular/core';
import {ContractService} from '../../../furama_service/ContractService';
import {Router} from '@angular/router';
import {Contract} from '../../../model/Contract';


@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})

export class ContractListComponent implements OnInit {
  p: number = 1;
  public contractList: Contract[];
  contract: Contract = new Contract();

  constructor(private contractService: ContractService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.contractService.getAllContract().subscribe(value => {
      this.contractList = value;
    });
  }

}
