import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../dictionary.service";
import {Words} from "../model/Words";

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  wordList: Words[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.wordList = this.dictionaryService.getAll();
  }
}
