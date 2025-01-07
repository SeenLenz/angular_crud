import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeybComponent } from './keyb.component';

describe('KeybComponent', () => {
  let component: KeybComponent;
  let fixture: ComponentFixture<KeybComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeybComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeybComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
