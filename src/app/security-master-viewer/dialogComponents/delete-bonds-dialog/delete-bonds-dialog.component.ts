import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bonds } from 'src/models/Bonds_Table';
import { BondsService } from 'src/shared/services/http/bonds.service';

@Component({
  selector: 'app-delete-bonds-dialog',
  templateUrl: './delete-bonds-dialog.component.html',
  styleUrls: ['./delete-bonds-dialog.component.scss']
})
export class DeleteBondsDialogComponent implements OnInit {

  @Input() bond?: Bonds;
  @Output() bondsUpdated = new EventEmitter<Bonds[]>();

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private bondsService: BondsService) { }

  deleteBond(bond: Bonds) {
    this.bondsService.deleteBonds(bond).subscribe((bonds: Bonds[]) => this.bondsUpdated.emit(bonds));
  }

  ngOnInit(): void {
    
  }

}
