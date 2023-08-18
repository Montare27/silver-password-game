import {Rule} from "./rule";

export class Rule_4 implements Rule{
  id: number = 4;

  status: boolean = false;

  description: string = "The digits in your password must add up to 25.";

  check(password: string): boolean {
    let numbers = password
      .match('/[0-9]/');

    // console.log(numbers == null)
    //   ?.map(x=>Number(x));

    let sum = numbers?.reduce((partial, x) => partial + x);
    console.log("sum: " + sum);
    // return sum == 25;
    return false;
  }
}
