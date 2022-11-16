import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResitcompComponent } from './resitcomp.component';

describe('ResitcompComponent', () => {
  let component: ResitcompComponent;
  let fixture: ComponentFixture<ResitcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResitcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResitcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
