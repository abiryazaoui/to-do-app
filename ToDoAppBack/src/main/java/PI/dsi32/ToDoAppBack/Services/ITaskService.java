package PI.dsi32.ToDoAppBack.Services;

import java.util.List;

import PI.dsi32.ToDoAppBack.Entities.Task;

public interface ITaskService {
    List<Task> getAllTasks();
    
    Task addTask(Task task);


}