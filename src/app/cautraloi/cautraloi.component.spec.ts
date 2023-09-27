import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CautraloiComponent } from './cautraloi.component';

describe('CautraloiComponent', () => {
  let component: CautraloiComponent;
  let fixture: ComponentFixture<CautraloiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CautraloiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CautraloiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
