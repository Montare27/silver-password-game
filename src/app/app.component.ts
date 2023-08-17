import { Component } from '@angular/core';
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

  isAllTasksComplete: boolean = true;

  actualRules: Rule[] = [];

  constructor(private gameService: GameService) {
    this.actualRules = gameService.getActualRules;
    this.actualRules.forEach((rule, index) => console.log(index + " desc: " + rule.description))
  }

  onPasswordChange(event: Event): void {
    this.password = (event.target as any).value;
    this.length = this.password.length;
  }

  checkTask(status: boolean) {
    if(!status)
      this.isAllTasksComplete = false;
    else
      this.gameService.upLevel();
  }
}
