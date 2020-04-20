import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeSideComponent } from './anime-side.component';

describe('AnimeSideComponent', () => {
  let component: AnimeSideComponent;
  let fixture: ComponentFixture<AnimeSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
