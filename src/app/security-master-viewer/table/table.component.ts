import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../dialogComponents/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../dialogComponents/edit-dialog/edit-dialog.component';
import { Equities } from '../../../models/Equities_Table';
import { EquitiesService } from '../../../shared/services/http/equities.service';
import { BondsService } from 'src/shared/services/http/bonds.service';
import { Bonds } from 'src/models/Bonds_Table';
import { EditBondsDialogComponent } from '../dialogComponents/edit-bonds-dialog/edit-bonds-dialog.component';
import { DeleteBondsDialogComponent } from '../dialogComponents/delete-bonds-dialog/delete-bonds-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Description', 'Open_Price', 'Close_Price', 'Dividend_Declare_Date', 'Action'];
  displayedColumnsBonds: string[] = ['Name', 'Description', 'Coupon', 'Maturity', 'Credit_Rating', 'Ask_Price', 'Bid_Price', 'Action'];

  EquityArray : any = []; 
  BondsArray: any = []; 
  
  @Input('security') security!: string
  
  constructor(public dialog: MatDialog, private equitiesService: EquitiesService, private bondsService: BondsService) { }

  openEditEquities(element:Equities) {
    this.dialog.open(EditDialogComponent, {width: '70%', data: {eq: element}});
  }

  openDeleteEquities(element: Equities) {
    this.dialog.open(DeleteDialogComponent, {data: {eq: element}});
  }

  openEditBonds(element:Bonds) {
    this.dialog.open(EditBondsDialogComponent, {width: '70%', data: {eq: element}});
  }

  openDeleteBonds(element: Bonds) {
    this.dialog.open(DeleteBondsDialogComponent, {data: {eq: element}});
  }

  getFormattedDate(date:string) {
    let date1 = new Date(date)
    let year = date1.getFullYear();
    let month = (1 + date1.getMonth()).toString().padStart(2, '0');
    let day = date1.getDate().toString().padStart(2, '0');
  
    return month + '/' + day + '/' + year;
  }

  ngOnInit(): void {
    this.equitiesService.getEquities().subscribe(result=>{this.EquityArray = result});

    this.bondsService.getBonds().subscribe(result => {this.BondsArray = result});
  }

  updateEquitiesList(equities: Equities[]){
    this.EquityArray = equities;
  }
  updateBondsList(bonds: Bonds[]){
    this.BondsArray = bonds;
  }
  
}
