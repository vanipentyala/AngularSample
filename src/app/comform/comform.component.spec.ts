import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComformComponent } from './comform.component';

describe('ComformComponent', () => {
  let component: ComformComponent;
  let fixture: ComponentFixture<ComformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
