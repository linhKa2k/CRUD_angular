import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailamComponent } from './bailam.component';

describe('BailamComponent', () => {
  let component: BailamComponent;
  let fixture: ComponentFixture<BailamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BailamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BailamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
