import { TaskStatus } from "./Enum/TaskStatus.enum";

export class Task {
    constructor(
        public id: number,
        public title: String,
        public description: String,
        public status:TaskStatus,
        public deadline: Date,
        public isDestactive?: boolean,
        public createdAt?: Date, 
        public updatedAt?: Date,
     ) {}
    
    }
