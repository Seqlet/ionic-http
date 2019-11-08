import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Score } from '../models/score.model';

@Injectable()
export class ScoreProvider {
  private scoreURL = 'https://cors-anywhere.herokuapp.com/http://labfk7.herokuapp.com/findscore?id=';
  constructor(public http: HttpClient) {}
  getScore(id: string) {
    return this.http.get<Score>(this.scoreURL + id);
  }
}
