import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {Rule} from "./rules/rule";

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent {
  @Input()
  rule: Rule = null!;

  @Input()
  password: string = '';

  @Output()
  successEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  status: boolean = false;

  checkPassword() {
    this.status = this.rule.check(this.password);
    this.successEvent.emit(this.status);
  }

  ngOnChanges(changes: SimpleChanges) {
    if((this as {password: string}).password) {
      this.checkPassword();
    }
  }

  constructor() {
    if(this.rule == null)
      console.log('rule is null')
    else
      console.log('password:' + this.password + "rule-title: " + this.rule.description)
    // console.log('rule_id ' + this.rule.id + ' rule_desc ' + this.rule.description + ' pass ' + this.password + ' status ' + this.status )
    // this.checkPassword();
  }
}
