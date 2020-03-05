import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRacesComponent } from './best-races.component';

describe('BestRacesComponent', () => {
  let component: BestRacesComponent;
  let fixture: ComponentFixture<BestRacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestRacesComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
