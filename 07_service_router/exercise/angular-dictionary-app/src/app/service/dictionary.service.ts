import { Injectable } from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  wordList: IWord[] = [
    {
      en: 'book',
      vi: 'sách'
    },
    {
      en: 'computer',
      vi: 'máy tính'
    },
    {
      en: 'hello',
      vi: 'xin chào'
    },
    {
      en: 'table',
      vi: 'cái bàn'
    }
  ];

  constructor() { }

  translate(input: string){
    return this.wordList.find(word => word.en === input);
  }
}
