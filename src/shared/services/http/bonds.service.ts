import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Bonds } from 'src/models/Bonds_Table';

@Injectable({
  providedIn: 'root'
})
export class BondsService {
    private url = "Vubonds";
    constructor(private http: HttpClient) { }
    
    public getBonds() : Observable<Bonds[]> {
      return this.http.get<Bonds[]>(`${environment.apiUrl}/${this.url}`)
    }

    public updateBonds(bond: any) : Observable<Bonds[]> {
      alert("Security Updated Successfully")
      return this.http.put<Bonds[]>(`${environment.apiUrl}/${this.url}/${bond.securityId}`, bond)
    }
  
    public deleteBonds(bond: any) : Observable<Bonds[]> {
      alert("Security Deleted Successfully")
      return this.http.delete<Bonds[]>(`${environment.apiUrl}/${this.url}/${bond.securityId}`)
    }
    
}
