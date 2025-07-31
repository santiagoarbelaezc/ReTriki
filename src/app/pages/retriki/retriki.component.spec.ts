import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrikiComponent } from './retriki.component';

describe('RetrikiComponent', () => {
  let component: RetrikiComponent;
  let fixture: ComponentFixture<RetrikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetrikiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
