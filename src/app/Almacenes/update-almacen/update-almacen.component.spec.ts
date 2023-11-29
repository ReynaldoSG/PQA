import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlmacenComponent } from './update-almacen.component';

describe('UpdateAlmacenComponent', () => {
  let component: UpdateAlmacenComponent;
  let fixture: ComponentFixture<UpdateAlmacenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAlmacenComponent]
    });
    fixture = TestBed.createComponent(UpdateAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
