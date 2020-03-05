import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbUserModule,
  NbIconModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { GamesComponent } from './games/games.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BestLapsComponent } from './best-laps/best-laps.component';
import { BestRacesComponent } from './best-races/best-races.component';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbIconModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    DashboardComponent,
    GamesComponent,
    BestLapsComponent,
    BestRacesComponent,
  ],
})
export class DashboardModule { }
