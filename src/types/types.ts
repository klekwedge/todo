export interface ITask {
  id: string;
  taskName: string;
  complete: boolean;
  collectionId: string;
  collectionColor: string;
  description: string;
  deadline: Date | null;
  creationDate: Date;
  priority: string | null;
}

export interface ICollection {
  icon: string | null,
  name: string,
  color: string | undefined,
  id: string;
}