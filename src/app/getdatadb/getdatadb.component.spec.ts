import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdatadbComponent } from './getdatadb.component';

describe('GetdatadbComponent', () => {
  let component: GetdatadbComponent;
  let fixture: ComponentFixture<GetdatadbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetdatadbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdatadbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
