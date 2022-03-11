import {Injectable} from '@angular/core';
import {Words} from "./model/Words";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  wordList: Words [] = [
    {
      id: 1,
      word: 'computer',
      meaning: 'máy tính'
    }, {
      id: 2,
      word: 'mouse',
      meaning: 'con chuột'
    },
    {
      id: 3,
      word: 'teacher',
      meaning: 'giáo viên'
    },
    {
      id: 4,
      word: 'burn',
      meaning: 'đốt, bỏng'
    },
    {
      id: 5,
      word: 'galaxy',
      meaning: 'thiên hà'
    },

  ]

  constructor(private  router: Router) {
  }

  getAll() {
    return this.wordList;
  }

  viewMeaning(meanId: number) {
    for (let word of this.wordList) {
      if (word.id === meanId) {
        return word.meaning;
      }
    }
  }

  findById(meanId: number) {
    for (let word of this.wordList) {
      if (word.id === meanId) {
        return word;
      }
    }
  }
}
