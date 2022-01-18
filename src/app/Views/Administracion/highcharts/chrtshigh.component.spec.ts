import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChrtshighComponent } from './chrtshigh.component';

describe('ChrtshighComponent', () => {
  let component: ChrtshighComponent;
  let fixture: ComponentFixture<ChrtshighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChrtshighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChrtshighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
