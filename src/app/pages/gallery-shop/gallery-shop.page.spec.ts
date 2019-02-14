import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryShopPage } from './gallery-shop.page';

describe('GalleryShopPage', () => {
  let component: GalleryShopPage;
  let fixture: ComponentFixture<GalleryShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryShopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
