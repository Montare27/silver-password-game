export interface Rule {
  id: number;
  description: string;
  check(password: string): boolean;
}
