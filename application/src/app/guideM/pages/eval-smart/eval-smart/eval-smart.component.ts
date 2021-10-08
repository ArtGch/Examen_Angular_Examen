import { Component, OnInit } from '@angular/core';
import {Evaluation} from "../../../models/evaluation/eval.module";
import {EvaluationService} from "../../../service/evaluation.service";

@Component({
  selector: 'app-eval-smart',
  templateUrl: './eval-smart.component.html',
  styleUrls: ['./eval-smart.component.scss']
})
export class EvalSmartComponent implements OnInit {

  public evals : Evaluation[] = [];

  constructor(private restauService: EvaluationService) { }

  ngOnInit(): void {
  }

  public loadEval() :void{
    this.restauService.getLivres().subscribe(value => this.evals = value);

  }

  public evalAdded(evaluation : Evaluation):void{
    this.restauService.addEvaluation(evaluation);
  }

}
