import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestauTableComponent } from './guideM/components/restau-table/restau-table.component';
import { RestauSmartComponent } from './guideM/pages/restau-smart/restau-smart.component';
import { EvalSmartComponent } from './guideM/pages/eval-smart/eval-smart/eval-smart.component';
import { EvalFormComponent } from './guideM/components/eval-form/eval-form/eval-form.component';
import { RestauEditComponent } from './guideM/components/restau-edit/restau-edit/restau-edit.component';
import { RestauFormComponent } from './guideM/components/restau-form/restau-form/restau-form.component';
import { RestauInfoComponent } from './guideM/components/restau-info/restau-info/restau-info.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {EvaluationService} from "./guideM/service/evaluation.service";
import {RestaurantService} from "./guideM/service/restaurant.service";
import { RestaurantEvalDirectDirective } from './shared/restaurant-eval-direct.directive';

@NgModule({
  declarations: [
    AppComponent,
    RestauTableComponent,
    RestauSmartComponent,
    EvalSmartComponent,
    EvalFormComponent,
    RestauEditComponent,
    RestauFormComponent,
    RestauInfoComponent,
    RestaurantEvalDirectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    EvaluationService,
    RestaurantService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
