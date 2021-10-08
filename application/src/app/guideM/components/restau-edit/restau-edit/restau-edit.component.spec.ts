import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauEditComponent } from './restau-edit.component';

describe('RestauEditComponent', () => {
  let component: RestauEditComponent;
  let fixture: ComponentFixture<RestauEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
