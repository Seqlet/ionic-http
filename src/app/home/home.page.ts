import { Component } from '@angular/core';
import { ScoreProvider } from '../../providers/score';
import { Observable } from 'rxjs';
import { Score } from '../../models/score.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  id: string;
  score$: Observable<Score>;
  constructor(private scoreProvider: ScoreProvider) {}
  getScore(id: string) {
    this.score$ = this.scoreProvider.getScore(id);
  }
}
