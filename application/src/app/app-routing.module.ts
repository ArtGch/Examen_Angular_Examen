import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestauSmartComponent} from "./guideM/pages/restau-smart/restau-smart.component";
import {RestaurantService} from "./guideM/service/restaurant.service";
import {RestauFormComponent} from "./guideM/components/restau-form/restau-form/restau-form.component";
import {EvalFormComponent} from "./guideM/components/eval-form/eval-form/eval-form.component";
import {RestauEditComponent} from "./guideM/components/restau-edit/restau-edit/restau-edit.component";

const routes: Routes = [
  { path:"", component:RestauSmartComponent},
  { path: "restaurants" , component:RestauSmartComponent},
  { path: "newRestau", component:RestauFormComponent},
  { path:"newEval", component:EvalFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[RestaurantService]
})
export class AppRoutingModule { }
