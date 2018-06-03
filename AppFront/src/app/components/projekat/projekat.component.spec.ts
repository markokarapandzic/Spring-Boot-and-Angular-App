import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekatComponent } from './projekat.component';

describe('ProjekatComponent', () => {
  let component: ProjekatComponent;
  let fixture: ComponentFixture<ProjekatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjekatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjekatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
