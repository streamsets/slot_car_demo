import { Component, OnInit } from '@angular/core';
import { RacingService } from '../../../services/racing.service';

@Component({
  selector: 'ngx-best-laps',
  templateUrl: './best-laps.component.html',
  styleUrls: ['./best-laps.component.scss'],
  providers: [RacingService],
})
export class BestLapsComponent implements OnInit {

  laps: [];

  constructor(private racingService: RacingService) { }

  ngOnInit() {
    this.racingService.bestLaps().subscribe((res: any) => {
      this.laps = res.data;
    });
  }

}
