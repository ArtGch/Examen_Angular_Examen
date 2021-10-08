import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../models/restaurant/restaurant.module";
import {RestaurantService} from "../../service/restaurant.service";

@Component({
  selector: 'app-restau-smart',
  templateUrl: './restau-smart.component.html',
  styleUrls: ['./restau-smart.component.scss']
})
export class RestauSmartComponent implements OnInit {

  public restau : Restaurant[] = [];
  constructor(private restauServ : RestaurantService) { }

  ngOnInit(): void {
    this.loadRestau();
  }

  public loadRestau() :void{
    this.restauServ.getRestau().subscribe(value => this.restau = value);

  }
  public restauAdded(restau : Restaurant):void{
    this.restauServ.addRestaurant(restau);
  }

}
