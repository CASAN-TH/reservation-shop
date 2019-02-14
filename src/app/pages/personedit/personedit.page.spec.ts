import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoneditPage } from './personedit.page';

describe('PersoneditPage', () => {
  let component: PersoneditPage;
  let fixture: ComponentFixture<PersoneditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoneditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoneditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
