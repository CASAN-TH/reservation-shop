import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoneEditPage } from './persone-edit.page';

describe('PersoneEditPage', () => {
  let component: PersoneEditPage;
  let fixture: ComponentFixture<PersoneEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoneEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoneEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
