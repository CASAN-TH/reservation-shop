import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueListPage } from './queue-list.page';

describe('QueueListPage', () => {
  let component: QueueListPage;
  let fixture: ComponentFixture<QueueListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
