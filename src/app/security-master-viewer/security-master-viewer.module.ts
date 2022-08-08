import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { TileComponent } from './tile/tile.component';
import { TableComponent } from './table/table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list'
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './dialogComponents/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './dialogComponents/edit-dialog/edit-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { EditBondsDialogComponent } from './dialogComponents/edit-bonds-dialog/edit-bonds-dialog.component';
import { DeleteBondsDialogComponent } from './dialogComponents/delete-bonds-dialog/delete-bonds-dialog.component';


@NgModule({
  declarations: [
    MasterComponent,
    TileComponent,
    TableComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    EditBondsDialogComponent,
    DeleteBondsDialogComponent
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports:[
    MasterComponent
  ]
})
export class SecurityMasterViewerModule { }
