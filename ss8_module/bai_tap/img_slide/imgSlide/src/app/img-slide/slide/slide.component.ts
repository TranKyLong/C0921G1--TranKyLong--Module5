import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,  Router} from "@angular/router";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  imgPage: number;

  constructor(
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.imgPage = +params.get('page');
      console.log(this.imgPage)
    })


  }

  getParam(){
    console.log(this.activatedRoute.snapshot.paramMap.get('page'));

    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.imgPage = +params['page'];
    //   console.log(this.imgPage)
    // })
  }


}
