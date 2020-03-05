import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NewRaceComponent} from './new-race.component';
import {
  NbButtonModule,
  NbCardModule,
  NbInputModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewRaceComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
  ],
})
export class NewRaceModule { }
