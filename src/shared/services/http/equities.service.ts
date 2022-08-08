import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Equities } from 'src/models/Equities_Table';

@Injectable({
  providedIn: 'root'
})


export class EquitiesService {

  private url = "Vuequities";
  constructor(private http: HttpClient) { }
  
  public getEquities() : Observable<Equities[]> {
    return this.http.get<Equities[]>(`${environment.apiUrl}/${this.url}`)
  }

  public updateEquities(equity: any) : Observable<Equities[]> {
    alert("Security Updated Successfully")
    return this.http.put<Equities[]>(`${environment.apiUrl}/${this.url}/${equity.securityId}`, equity)
  }

  public deleteEquities(equity: any) : Observable<Equities[]> {
    alert("Security Deleted Successfully")
    return this.http.delete<Equities[]>(`${environment.apiUrl}/${this.url}/${equity.securityId}`)
  }
}