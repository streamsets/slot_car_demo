import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbUserModule,
  NbIconModule,
  NbListModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { RaceComponent } from './race.component';
import { PlayerComponent } from './player-card/player.component';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbIconModule,
    NbListModule,
  ],
  declarations: [
    RaceComponent,
    PlayerComponent,
  ],
  providers: [
  ],
})
export class RaceModule { }
