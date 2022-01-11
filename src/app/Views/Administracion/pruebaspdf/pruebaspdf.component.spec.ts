import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaspdfComponent } from './pruebaspdf.component';

describe('PruebaspdfComponent', () => {
  let component: PruebaspdfComponent;
  let fixture: ComponentFixture<PruebaspdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaspdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaspdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
