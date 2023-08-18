import {ChangeDetectorRef, Component, SimpleChanges} from '@angular/core';
import {Rule} from "./rule/rules/rule";
import {GameService} from "./rule/game.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Silver Password Game';

  password: string = '';

  length: number = 0;

  actualRules: Rule[] = [];

  constructor(private gameService: GameService, private cdRef: ChangeDetectorRef) {
    this.actualRules = gameService.getActualRules;
    this.actualRules.forEach((rule, index) => console.log(index + " desc: " + rule.description))
  }

  onStatusChange(status: boolean) {
    let isFailed = this.actualRules.some(rule => !rule.status);

    if(!isFailed) {
      this.gameService.upLevel();
      this.cdRef.detectChanges();
    }
  }

  onPasswordChange(event: Event): void {
    this.password = (event.target as any).value;
    this.length = this.password.length;
  }
}
