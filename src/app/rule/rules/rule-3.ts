import {Rule} from "./rule";

export class Rule_3 implements Rule{
  id: number = 3;

  status: boolean = false;

  description: string = "Your password must include an uppercase letter.";

  check(password: string): boolean {
    return /[A-Z]/.test(password);
  }

}
