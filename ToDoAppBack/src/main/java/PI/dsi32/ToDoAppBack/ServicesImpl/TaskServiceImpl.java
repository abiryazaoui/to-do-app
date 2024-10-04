package PI.dsi32.ToDoAppBack.ServicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import PI.dsi32.ToDoAppBack.Entities.Task;
import PI.dsi32.ToDoAppBack.Repository.EntityRepository;
import PI.dsi32.ToDoAppBack.Services.ITaskService;

@Service
public class TaskServiceImpl implements ITaskService {
	
	@Autowired
	private EntityRepository entityRepo;

	@Override
	public List<Task> getAllTasks() {
		// TODO Auto-generated method stub
		return entityRepo.findAll();
	}

	@Override
	public Task addTask(Task task) {
		// TODO Auto-generated method stub
		return entityRepo.save(task);
	}


}
