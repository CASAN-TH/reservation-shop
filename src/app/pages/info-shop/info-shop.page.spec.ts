import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoShopPage } from './info-shop.page';

describe('InfoShopPage', () => {
  let component: InfoShopPage;
  let fixture: ComponentFixture<InfoShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoShopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
