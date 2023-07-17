import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAuthComponent } from './banner-auth.component';

describe('BannerAuthComponent', () => {
  let component: BannerAuthComponent;
  let fixture: ComponentFixture<BannerAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
