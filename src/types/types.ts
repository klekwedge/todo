export interface ITask {
  id: string;
  taskName: string;
  complete: boolean;
  category: string;
  description: string;
  deadline: Date | null;
  creationDate: string[];
}
