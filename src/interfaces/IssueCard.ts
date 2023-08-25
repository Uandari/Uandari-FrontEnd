export interface IssueCard {
  id: string;
  typeProblem: string;
  category: string;
  status: string;
  dateToSolveProblem: string;
  participants: User[];
  dateCreated: string;
}

export interface User {
  id: string;
  name: string;
  maternalName: string;
  paternalName: string;
  cell: string;
}
