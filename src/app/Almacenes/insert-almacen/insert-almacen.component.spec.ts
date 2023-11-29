import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAlmacenComponent } from './insert-almacen.component';

describe('InsertAlmacenComponent', () => {
  let component: InsertAlmacenComponent;
  let fixture: ComponentFixture<InsertAlmacenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertAlmacenComponent]
    });
    fixture = TestBed.createComponent(InsertAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
