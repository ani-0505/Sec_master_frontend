import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input('active') numberOfActive! : string;
  @Input('inactive') numberOfInactive! : string;

  constructor() { }

  total(a:string, b:string){
    let result = parseInt(a)+parseInt(b)
    return typeof(result) == "number" ? result : '';
  }

  ngOnInit(): void {
  }

}
