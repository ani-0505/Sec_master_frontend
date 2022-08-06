import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { MasterComponent } from '../security-master-viewer/master/master.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {path: 'viewer', component: MasterComponent},
  {path: 'uploader', component: MasterComponent},
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
