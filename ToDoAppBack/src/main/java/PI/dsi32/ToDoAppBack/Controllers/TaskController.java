package PI.dsi32.ToDoAppBack.Controllers;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import PI.dsi32.ToDoAppBack.Entities.Task;
import PI.dsi32.ToDoAppBack.ServicesImpl.TaskServiceImpl;


@RestController
@RequestMapping("/tasks")
public class TaskController {
	
	@Autowired
    private TaskServiceImpl taskService;
	
    @GetMapping()
    public ResponseEntity<List<Task>> getAllTasks() {
        try {
            List<Task> tasks = taskService.getAllTasks();
            return new ResponseEntity<>(tasks, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
    @PostMapping()
    public ResponseEntity<Task> addTask(@RequestBody Task task) {
        try {
        	task.setCreatedAt(LocalDateTime.now());
            Task newTask = taskService.addTask(task);
            return new ResponseEntity<>(newTask, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

	
}
