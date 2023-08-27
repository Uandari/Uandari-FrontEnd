export interface IssueCard {
  id: number;
  typeProblem: string;
  category: string;
  quantity: number;
  status: 'PENDING' | 'FINISHED';
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
