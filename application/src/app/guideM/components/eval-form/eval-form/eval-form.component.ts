import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Evaluation} from "../../../models/evaluation/eval.module";

@Component({
  selector: 'app-eval-form',
  templateUrl: './eval-form.component.html',
  styleUrls: ['./eval-form.component.scss']
})
export class EvalFormComponent implements OnInit {

  @ViewChild("form", {static: true}) form?: NgForm;

  @Output() livreAdded = new EventEmitter<Evaluation>();

  public eval:Evaluation = {
    evaluateur : "",
    commentaire: "",
    etoiles: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.form && this.form.valid) {
      this.livreAdded.emit(this.eval);
      this.eval = {
        evaluateur : "",
        commentaire: "",
        etoiles: 0
      }
    }
  }

}
