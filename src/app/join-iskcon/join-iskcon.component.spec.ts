import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinISKCONComponent } from './join-iskcon.component';

describe('JoinISKCONComponent', () => {
  let component: JoinISKCONComponent;
  let fixture: ComponentFixture<JoinISKCONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinISKCONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinISKCONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
