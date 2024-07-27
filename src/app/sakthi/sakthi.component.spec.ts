import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SakthiComponent } from './sakthi.component';

describe('SakthiComponent', () => {
  let component: SakthiComponent;
  let fixture: ComponentFixture<SakthiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SakthiComponent]
    });
    fixture = TestBed.createComponent(SakthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
