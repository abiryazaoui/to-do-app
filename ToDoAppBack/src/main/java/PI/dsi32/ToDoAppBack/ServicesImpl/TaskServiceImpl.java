package PI.dsi32.ToDoAppBack.ServicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import PI.dsi32.ToDoAppBack.Entities.Task;
import PI.dsi32.ToDoAppBack.Repository.TaskRepository;
import PI.dsi32.ToDoAppBack.Services.ITaskService;

@Service
public class TaskServiceImpl implements ITaskService {
	
	@Autowired
	private TaskRepository taskRepo;

	@Override
	public List<Task> getAllTasks() {
		// TODO Auto-generated method stub
		return taskRepo.findAll();
	}

	@Override
	public Task addTask(Task task) {
		// TODO Auto-generated method stub
		return taskRepo.save(task);
	}

	@Override
	public Task editTask(Task task) {
		// TODO Auto-generated method stub
		return taskRepo.save(task);
	}


}
