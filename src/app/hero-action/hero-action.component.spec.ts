import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroActionComponent } from './hero-action.component';

describe('HeroActionComponent', () => {
  let component: HeroActionComponent;
  let fixture: ComponentFixture<HeroActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
