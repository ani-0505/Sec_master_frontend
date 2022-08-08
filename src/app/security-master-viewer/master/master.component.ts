import { Component, OnInit } from '@angular/core';
import { BondsService } from 'src/shared/services/http/bonds.service';
import { EquitiesService } from 'src/shared/services/http/equities.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  // Get Counts of Active and Inactive from Table Component TS file and use here
  activeEquities! : string
  inactiveEquities! : string
  totalEquities! : string
  activeBonds! : string
  inactiveBonds! : string
  totalBonds! : string

  constructor(private equitiesService: EquitiesService, private bondsService: BondsService) { }

  ngOnInit(): void {
    this.equitiesService.getEquities().subscribe(result=>{ 
      let activeEquitiesCount = 0
     
      result.forEach(obj => {
        Object.entries(obj).forEach(
          ([key, value]) => {
         
          if(key=='isActive' && value===true)
          activeEquitiesCount++;
        });
       
      });
      this.inactiveEquities=(result.length-activeEquitiesCount).toString();
      this.activeEquities = activeEquitiesCount.toString();
      // this.totalEquities = result.length.toString();
    });

    this.bondsService.getBonds().subscribe(result=>{ 
      let activeBondsCount = 0
     
      result.forEach(obj => {
        Object.entries(obj).forEach(
          ([key, value]) => {
         
          if(key=='isActive' && value===true)
          activeBondsCount++;
        });
       
      });
      this.inactiveBonds=(result.length-activeBondsCount).toString();
      this.activeBonds = activeBondsCount.toString();
      // this.totalBonds = result.length.toString();
    });
  }

}
