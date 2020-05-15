import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuppageComponent } from './signuppage.component';

describe('SignuppageComponent', () => {
  let component: SignuppageComponent;
  let fixture: ComponentFixture<SignuppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
