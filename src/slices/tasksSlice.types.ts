import { ICollection, ITask } from "../types/types";

export default interface TasksState {
    tasks: ITask[];
    currentTask: ITask | null;
    collections: ICollection[]
}

