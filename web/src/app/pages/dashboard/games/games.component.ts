import { Component, OnInit } from '@angular/core';
import { RacingService, FinishedGame } from '../../../services/racing.service';

@Component({
  selector: 'ngx-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  providers: [RacingService],
})
export class GamesComponent implements OnInit {

  games: FinishedGame[];

  constructor(private racingService: RacingService) {
    this.racingService.games().subscribe((res: any) => {
      this.games = res.data;
    });
  }

  ngOnInit() {
  }

}
