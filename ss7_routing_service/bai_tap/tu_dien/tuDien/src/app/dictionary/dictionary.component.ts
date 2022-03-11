import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DictionaryService} from "../dictionary.service";
import {Words} from "../model/Words";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  wordMean: Words;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    const wordId = Number(this.activatedRoute.snapshot.params.id);
    this.wordMean = this.dictionaryService.findById(wordId);
    console.log(this.wordMean.word + " " + this.wordMean.meaning);
  }

}
