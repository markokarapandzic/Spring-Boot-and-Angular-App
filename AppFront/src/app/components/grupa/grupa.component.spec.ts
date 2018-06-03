import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupaComponent } from './grupa.component';

describe('GrupaComponent', () => {
  let component: GrupaComponent;
  let fixture: ComponentFixture<GrupaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
