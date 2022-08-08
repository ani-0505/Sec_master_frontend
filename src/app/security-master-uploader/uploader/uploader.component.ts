import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-root',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {
 
  title = 'last_attempt';

  constructor(private http:HttpClient){}
  file:any;
  getFile(event : any)
  {
    this.file = event.target.files[0];
    console.log("file", this.file)
  }
  uploadfile()
  {
    let formData = new FormData();
    formData.set("file",this.file);

    //Call API
    this.http.post('http://localhost:7203/api/Vuequities',formData)
    .subscribe((response)=>{});
  }
}