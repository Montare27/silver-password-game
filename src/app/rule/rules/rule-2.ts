import {Rule} from "./rule";

export class Rule_2 implements Rule{
  id: number = 2;

  status: boolean = false;

  description: string = "Your password must include a number.";

  check(password: string): boolean {
    return /[0-9]/.test(password);
  }
}
