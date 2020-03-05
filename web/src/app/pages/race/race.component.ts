import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { RacingService, Game, Player } from '../../services/racing.service';
import { Subscription, Observable } from 'rxjs';
import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'ngx-race',
  styleUrls: ['./race.component.scss'],
  templateUrl: './race.component.html',
  providers: [RacingService],
})
export class RaceComponent implements OnDestroy, OnInit {


  game: Game;
  gameSub: Subscription;

  private windowOpened = false;

  @ViewChild('contentTemplate', { static: false }) contentTemplate: TemplateRef<any>;

  constructor(private racingService: RacingService, private windowService: NbWindowService) {

  }

  ngOnInit(): void {
    this.gameSub = Observable.interval(2000)
      .subscribe(() => { this.updateGame(); });
  }
  ngOnDestroy(): void {
    this.gameSub.unsubscribe();
  }

  private updateGame() {
    this.racingService.currentGame().subscribe((res: any) => {
      this.game = res.data[0];
      if (this.game.stop_time) {
        this.openWindow();
      } else {
        this.windowOpened = false;
      }
    });
  }

  get winner(): Player {
    if (this.game) {
      if (this.game.player1.id === this.game.winner) {
        return this.game.player1;
      } else if (this.game.player2.id === this.game.winner) {
        return this.game.player2;
      }
    }
    return null;
  }

  openWindow() {
    if (!this.windowOpened) {
      this.windowOpened = true;
      this.windowService.open(
        this.contentTemplate,
        { title: 'Winner', context: { text: this.winner.name } },
      );
    }
  }
}
