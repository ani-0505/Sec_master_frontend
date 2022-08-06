import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../dialogComponents/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../dialogComponents/edit-dialog/edit-dialog.component';
import { Equities } from '../interfaces/Equities_Table';


function getFormattedDate(date:Date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  return month + '/' + day + '/' + year;
}

const ELEMENT_DATA: Equities[] = [
  {ID: 12, Name: 'Asian Paints', Description: 'Some Description', Open_Price: 123, Close_Price: 124, Dividend_Declare_Date: getFormattedDate(new Date("05/25/2005")), Is_Active: true, Action: ''},
  {ID: 11, Name: 'Hero Cycles', Description: 'Some Description', Open_Price: -100, Close_Price: 900, Dividend_Declare_Date: getFormattedDate(new Date("12/12/2022")), Is_Active: true, Action: ''},
  {ID: 10, Name: 'Asian Paints', Description: 'Some Description', Open_Price: 123, Close_Price: -100, Dividend_Declare_Date: getFormattedDate(new Date("05/25/2005")), Is_Active: false, Action: ''},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Description', 'Open_Price', 'Close_Price', 'Dividend_Declare_Date', 'Action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  openEdit(element:Equities) {
    this.dialog.open(EditDialogComponent, {width: '50%', data: {eq: element}});
  }

  openDelete(element: Equities) {
    let deleteRef = this.dialog.open(DeleteDialogComponent, {data: {Security_Name: element.Name}});
    // deleteRef.afterClosed().subscribe(result => {
    //   alert("Result: " + result);
    // })
  }

  ngOnInit(): void {
  }

}
