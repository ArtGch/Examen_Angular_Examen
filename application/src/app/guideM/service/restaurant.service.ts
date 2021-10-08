import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Restaurant} from "../models/restaurant/restaurant.module";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restau: BehaviorSubject<Restaurant[]> = new BehaviorSubject<Restaurant[]>([]);

  constructor(private httpClient: HttpClient) {
    this.loadRestaurant();
  }

  public getRestau(): Observable<Restaurant[]> {
    return this.restau;
  }

  public loadRestaurant(): void {
    this.httpClient.get<Restaurant[]>("http://localhost:3000/restaurants").subscribe(value => this.restau.next(value));
  }

  public addRestaurant(restaurant: Restaurant): void {
    this.httpClient.post("http://localhost:3000/restaurants", restaurant).subscribe(value => this.restau.next([...this.restau.getValue(), restaurant]));
  }
}
