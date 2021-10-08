import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauInfoComponent } from './restau-info.component';

describe('RestauInfoComponent', () => {
  let component: RestauInfoComponent;
  let fixture: ComponentFixture<RestauInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
