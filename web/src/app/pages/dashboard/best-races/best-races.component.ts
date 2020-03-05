import { Component, OnInit } from '@angular/core';
import { RacingService } from '../../../services/racing.service';

@Component({
  selector: 'ngx-best-races',
  templateUrl: './best-races.component.html',
  styleUrls: ['./best-races.component.scss'],
  providers: [RacingService],
})
export class BestRacesComponent implements OnInit {

  races: [];

  constructor(private racingService: RacingService) { }

  ngOnInit() {
    this.racingService.bestRaces().subscribe((res: any) => {
      this.races = res.data;
    });
  }

}
