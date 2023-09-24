export interface IssueInterface {
  id: number;
  type: string;
  category: string;
  area: string;
  createdDate: string;
  solutionDate: string;
  participant: string;
  description: string;
  solution: string;
  done: number;
  total: number;
  states: { value: number; label: string }[];
}
