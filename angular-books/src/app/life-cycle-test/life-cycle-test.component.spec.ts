import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleTestComponent } from './life-cycle-test.component';

describe('LifeCycleTestComponent', () => {
  let component: LifeCycleTestComponent;
  let fixture: ComponentFixture<LifeCycleTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
