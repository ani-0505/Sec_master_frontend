import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bonds } from 'src/models/Bonds_Table';
import { CreditRating } from 'src/utility-state-service/creditRating';
import { Currency } from 'src/utility-state-service/currency';
import { BondsService } from 'src/shared/services/http/bonds.service';

@Component({
  selector: 'app-edit-bonds-dialog',
  templateUrl: './edit-bonds-dialog.component.html',
  styleUrls: ['./edit-bonds-dialog.component.scss']
})
export class EditBondsDialogComponent implements OnInit {

  bondsGroup!: FormGroup
  @Input() bonds?: Bonds
  @Output() bondsUpdated = new EventEmitter<Bonds[]>();

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private bondsService: BondsService) { }

  editBond(bond: Bonds) {
    this.bondsService.updateBonds(bond).subscribe((bonds: Bonds[]) => this.bondsUpdated.emit(bonds));
  }

  getDateFromString(date:string) {
    var parts = date.substring(0, 11).split('-');
    var mydate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])).toISOString().slice(0, 10);
    return mydate;
  }

  private initForm() {
    this.bondsGroup = new FormGroup({
      securityId: new FormControl(),
      securityName: new FormControl(),
      securityDescription: new FormControl(),
      couponRate: new FormControl('', Validators.compose([Validators.min(0)])),
      isCallable: new FormControl(),
      maturityDate: new FormControl({type: Date}),
      penultimateCouponDate: new FormControl({type: Date}),
      pfCreditRating: new FormControl(),
      askPrice: new FormControl('', Validators.compose([Validators.min(0)])),
      bidPrice: new FormControl('', Validators.compose([Validators.min(0)]))
    })
  }

  get couponRate() {
    return this.bondsGroup.get('couponRate');
  }

  get askPrice() {
    return this.bondsGroup.get('askPrice');
  }
  
  get bidPrice() {
    return this.bondsGroup.get('bidPrice');
  }

  CreditRating: any = new CreditRating()

  ngOnInit(): void {
    this.initForm();
  }

}