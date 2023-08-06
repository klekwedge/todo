import { ITask } from "../types/types";

export default interface TasksState {
    tasks: ITask[];
    currentTask: ITask | null;
}

