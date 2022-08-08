import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBondsDialogComponent } from './delete-bonds-dialog.component';

describe('DeleteBondsDialogComponent', () => {
  let component: DeleteBondsDialogComponent;
  let fixture: ComponentFixture<DeleteBondsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBondsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBondsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
