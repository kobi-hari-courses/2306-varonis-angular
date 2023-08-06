import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuHaHaComponent } from './mu-ha-ha.component';

describe('MuHaHaComponent', () => {
  let component: MuHaHaComponent;
  let fixture: ComponentFixture<MuHaHaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MuHaHaComponent]
    });
    fixture = TestBed.createComponent(MuHaHaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
