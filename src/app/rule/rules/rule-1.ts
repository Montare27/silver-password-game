import {Rule} from "./rule";

export class Rule_1 implements Rule{
  id: number = 1;

  description: string = "Your password must be at least 5 characters.";

  check(password: string): boolean {
    return true;
  }
}
