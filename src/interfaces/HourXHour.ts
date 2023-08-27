export interface HourXHour {
  idHourxHour: number;
  hour: string;
  date: string;
  must: number;
  mustAccumulative: number;
  is: number;
  isAccumulative: number;
  difference: number;
  accumulativeDifference: number;
  idUser: number;
  idCell: number;
  issues: Issue[];
}

interface Issue {
  idhourxhourIssue: number;
  description: string;
  type: {
    name: string;
  };
}
