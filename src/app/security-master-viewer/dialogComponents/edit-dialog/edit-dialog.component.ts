import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Equities } from 'src/models/Equities_Table';
import { CreditRating } from 'src/utility-state-service/creditRating';
import { Currency } from 'src/utility-state-service/currency';
import { EquitiesService } from 'src/shared/services/http/equities.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  equityGroup!: FormGroup;
  @Input() equity?: Equities;
  @Output() equitiesUpdated = new EventEmitter<Equities[]>();

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private equitiesService: EquitiesService ) { }

  editEquity(equity: Equities) {
    this.equitiesService.updateEquities(equity).subscribe((equities: Equities[]) => this.equitiesUpdated.emit(equities));
  }

  getDateFromString(date:string) {
    var parts = date.substring(0, 11).split('-');
    var mydate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])).toISOString().slice(0, 10);
    return mydate;
  }

  private initForm() {
    this.equityGroup = new FormGroup({
      securityId: new FormControl(),
      securityName: new FormControl(),
      securityDescription: new FormControl(),
      priceCurrency: new FormControl(),
      totalSharesOutstanding: new FormControl('', Validators.compose([Validators.min(0)])),
      openPrice: new FormControl('', Validators.compose([Validators.min(0)])),
      closePrice: new FormControl('', Validators.compose([Validators.min(0)])),
      declaredDate: new FormControl({type: Date}, ),
      pfCreditRating: new FormControl()
    })
    // this.equityGroup.controls['securityName'].disable();
  }
  
  get total_shares_outstanding() {
    return this.equityGroup.get('total_shares_outstanding');
  }
  
  get open_price() {
    return this.equityGroup.get('open_price');
  }
  
  get close_price() {
    return this.equityGroup.get('close_price');
  }

  CreditRating: any = new CreditRating()
  Currency: any = new Currency()

  ngOnInit(): void {
    this.initForm();
  }

}
