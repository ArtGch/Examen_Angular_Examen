import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Evaluation} from "../models/evaluation/eval.module";

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private evals: BehaviorSubject<Evaluation[]> = new BehaviorSubject<Evaluation[]>([]);

  constructor(private httpClient: HttpClient) {
    this.loadEvaluation();
  }

  public getLivres(): Observable<Evaluation[]> {
    return this.evals;
  }

  public loadEvaluation(): void {
    this.httpClient.get<Evaluation[]>("http://localhost:3000").subscribe(value => this.evals.next(value));
  }

  public addEvaluation(evaluations: Evaluation): void {
    this.httpClient.post("http://localhost:3000", evaluations).subscribe(value => this.evals.next([...this.evals.getValue(), evaluations]));
  }
}
