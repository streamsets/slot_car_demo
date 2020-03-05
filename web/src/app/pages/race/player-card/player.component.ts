import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { RacingService, Lap, Player } from '../../../services/racing.service';

import { Subscription, Observable } from 'rxjs';
import 'rxjs/add/observable/interval';

@Component({
    selector: 'ngx-player',
    styleUrls: ['./player.component.scss'],
    templateUrl: './player.component.html',
    providers: [RacingService],
})
export class PlayerComponent implements OnDestroy, OnInit {
    private alive = true;
    private _player: Player;
    private _game: number;
    private _winner: boolean;

    currentTheme: string;
    themeSubscription: any;
    labSub: Subscription;

    laps: Lap[];

    @Input()
    set player(player: Player) {
        this._player = player;
    }

    @Input()
    set game(game: number) {
        this._game = game;
    }

    @Input()
    set winner(winner: boolean) {
        this._winner = winner;
    }

    constructor(private themeService: NbThemeService, private racingService: RacingService) {
        this.themeService.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(theme => {
                this.currentTheme = theme.name;
            });
    }

    ngOnInit() {
        this.labSub = Observable.interval(500)
            .subscribe(() => { this.updateLaps(); });
    }

    ngOnDestroy() {
        this.labSub.unsubscribe();
        this.alive = false;
    }

    get player(): Player { return this._player; }
    get game(): number { return this._game; }
    get winner(): boolean { return this._winner; }

    deltaUp(lap: Lap): boolean {
        const index = this.laps.indexOf(lap);
        if (index === 0) {
            return true;
        }

        const prev = this.laps[index - 1];

        return lap.duration < prev.duration;
    }

    private updateLaps() {
        if (this.player) {
            this.racingService.getLaps(this.player.id, this._game)
            .subscribe((res: any) => {
                this.laps = res.data;
            });
        }
    }
}
