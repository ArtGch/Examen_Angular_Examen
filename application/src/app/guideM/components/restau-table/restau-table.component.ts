import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../models/restaurant/restaurant.module";

@Component({
  selector: 'app-restau-table',
  templateUrl: './restau-table.component.html',
  styleUrls: ['./restau-table.component.scss']
})
export class RestauTableComponent implements OnInit {

  @Input() restau: Restaurant[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  public calculMoyenne(index: number): number {
    let somme = 0;


    if (this.restau[index].evaluations.length == 0) {
      return -1;
    }
    else {
      for( let i in this.restau[index].evaluations) {
        somme += this.restau[index].evaluations[i].etoiles;
      }
      let moyenne = somme / this.restau[index].evaluations.length
      return moyenne;
    }

  }


}
