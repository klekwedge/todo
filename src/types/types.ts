export interface ITask {
  id: string;
  taskName: string;
  complete: boolean;
  category: string;
  description: string;
  deadline: string | null;
  creationDate: string[];
}
