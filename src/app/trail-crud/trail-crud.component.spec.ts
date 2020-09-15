import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailCrudComponent } from './trail-crud.component';

describe('TrailCrudComponent', () => {
  let component: TrailCrudComponent;
  let fixture: ComponentFixture<TrailCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
