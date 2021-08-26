import { Component, OnInit } from '@angular/core';
import {IWord} from '../model/iword';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  word: IWord;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
    const enWord = this.activatedRoute.snapshot.params.id;
    this.word = this.dictionaryService.translate(enWord);
  }

  ngOnInit(): void {
  }

}
