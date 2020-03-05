import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestLapsComponent } from './best-laps.component';

describe('BestLapsComponent', () => {
  let component: BestLapsComponent;
  let fixture: ComponentFixture<BestLapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestLapsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestLapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
