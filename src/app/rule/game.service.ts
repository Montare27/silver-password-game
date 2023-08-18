import { Injectable } from '@angular/core';
import {Rule} from "./rules/rule";
import {RuleList} from "./rules/rule-list";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private allRules: Rule[] = [];

  private actualRules: Rule[] = [];

  private level: number = 1;

  constructor() {
    this.allRules = RuleList;

    this.actualRules = this.allRules.slice(0, this.level);
  }

  public get getActualRules() {
    return this.actualRules;
  }

  public upLevel() {
    if(this.allRules[this.level] != null) {
      this.actualRules.push(this.allRules[this.level]);
      this.level ++;
    }
  }

  private sortRules() {
    this.actualRules.slice().sort((a, b) => a.status === b.status ? 0 : (a.status ? 1 : -1));
  }
}
