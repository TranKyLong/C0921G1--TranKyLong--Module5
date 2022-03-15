import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArletComponent } from './arlet.component';

describe('ArletComponent', () => {
  let component: ArletComponent;
  let fixture: ComponentFixture<ArletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
