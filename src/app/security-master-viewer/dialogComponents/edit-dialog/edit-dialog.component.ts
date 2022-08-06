import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  equityGroup!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  equitySubmit() {
    console.log("Submitted")
  }

  private initForm() {
    this.equityGroup = new FormGroup({
      security_name: new FormControl({value: 'Jay Maru', disabled: true}),
      security_description: new FormControl(),
      price_currency: new FormControl(),
      total_shares_outstanding: new FormControl(),
      open_price: new FormControl(),
      close_price: new FormControl(),
      declared_date: new FormControl(),
      pf_credit_rating: new FormControl()
    })
    // this.equityGroup.controls['security_name'].disable();
  }

  ngOnInit(): void {
    this.initForm();
  }

}
