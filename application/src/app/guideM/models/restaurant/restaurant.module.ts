import {Evaluation} from "../evaluation/eval.module";

export interface Restaurant {
  id: number,
  nom: string,
  adresse: string,
  evaluations:Evaluation[]
}
