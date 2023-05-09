import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIUXComponent } from './ui-ux.component';

describe('UIUXComponent', () => {
  let component: UIUXComponent;
  let fixture: ComponentFixture<UIUXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UIUXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UIUXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
