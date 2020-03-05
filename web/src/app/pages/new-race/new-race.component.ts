import { Component, OnInit } from '@angular/core';
import { RacingService, NewGame, Player } from '../../services/racing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-new-race',
  templateUrl: './new-race.component.html',
  styleUrls: ['./new-race.component.scss'],
  providers: [RacingService],
})
export class NewRaceComponent implements OnInit {

  newGame = {
    player1: {} as Player,
    player2: {} as Player,
  } as NewGame;

  constructor(private racingService: RacingService, private router: Router) { }

  ngOnInit() {
  }

  summit() {
    this.racingService.newGame(this.newGame)
      .subscribe((res: any) => {
        this.router.navigateByUrl('/pages/race');
      });
  }

}
