import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { UploaderComponent } from './uploader/uploader.component';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    UploaderComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class SecurityMasterUploaderModule { }
