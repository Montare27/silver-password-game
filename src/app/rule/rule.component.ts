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
  status: EventEmitter<boolean> = new EventEmitter<boolean>();

  checkPassword() {
    this.rule.status = this.rule.check(this.password);
    this.status.emit(this.rule.status);
  }

  ngOnChanges(changes: SimpleChanges) {
    if((this as {password: string}).password) {
      this.checkPassword();
    }
  }


}
