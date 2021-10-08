import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Restaurant} from "../../../models/restaurant/restaurant.module";

@Component({
  selector: 'app-restau-form',
  templateUrl: './restau-form.component.html',
  styleUrls: ['./restau-form.component.scss']
})
export class RestauFormComponent implements OnInit {

  @ViewChild("form", {static: true}) form?: NgForm;

  @Output() restauAdded = new EventEmitter<Restaurant>();

  public restaurant:Restaurant = {
    id : 0,
    nom: "",
    adresse: "",
    evaluations:[]
  }

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.form && this.form.valid) {
      this.restauAdded.emit(this.restaurant);
      this.restaurant = {
        id :0,
        nom: "",
        adresse: "",
        evaluations:[]
      }
    }
  }

}
