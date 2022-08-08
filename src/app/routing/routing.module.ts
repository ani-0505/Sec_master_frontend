import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { MasterComponent } from '../security-master-viewer/master/master.component';
import { UploaderComponent } from '../security-master-uploader/uploader/uploader.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {path: 'viewer', component: MasterComponent},
  {path: 'uploader', component: UploaderComponent},
  {path: '', redirectTo: '/viewer', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
