import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Equities } from 'src/models/Equities_Table';
import { EquitiesService } from 'src/shared/services/http/equities.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  @Input() equity?: Equities;
  @Output() equitiesUpdated = new EventEmitter<Equities[]>();

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private equitiesService: EquitiesService) { }

  
  deleteEquity(equity: Equities) {
    this.equitiesService.deleteEquities(equity).subscribe((equities: Equities[]) => this.equitiesUpdated.emit(equities));
  }

  ngOnInit(): void {
  }

}
