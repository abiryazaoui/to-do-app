package PI.dsi32.ToDoAppBack.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import PI.dsi32.ToDoAppBack.Entities.Task;

@Repository
public interface EntityRepository extends JpaRepository<Task, Integer> {

}