import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBondsDialogComponent } from './edit-bonds-dialog.component';

describe('EditBondsDialogComponent', () => {
  let component: EditBondsDialogComponent;
  let fixture: ComponentFixture<EditBondsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBondsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBondsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
