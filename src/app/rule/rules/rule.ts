export interface Rule {
  id: number;
  description: string;
  status: boolean;
  check(password: string): boolean;
}
