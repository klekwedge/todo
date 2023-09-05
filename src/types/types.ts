export interface ITask {
  id: string;
  taskName: string;
  complete: boolean;
  collection: string;
  color: string;
  description: string;
  deadline: Date | null;
  creationDate: string[];
  priority: string | null;
}

export interface ICollection {
  icon: string | null,
  name: string,
  color: string | undefined,
  id: string;
}