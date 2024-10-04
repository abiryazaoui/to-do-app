package PI.dsi32.ToDoAppBack.Entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

import PI.dsi32.ToDoAppBack.enums.TaskStatus;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;



@Entity
public class Task implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    
    private String description;
    
	@Enumerated(EnumType.STRING)
    private TaskStatus status;

    private LocalDateTime deadline;
    
    private LocalDateTime createdAt;
    
    private LocalDateTime updatedAt;

    private boolean isDestactive;

    public Task() {
		super();
	}

	public Task(int id, String title, String description, TaskStatus status, LocalDateTime deadline,
			LocalDateTime createdAt, LocalDateTime updatedAt, boolean isDestactive) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.status = status;
		this.deadline = deadline;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.isDestactive = isDestactive;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public TaskStatus getStatus() {
		return status;
	}

	public void setStatus(TaskStatus status) {
		this.status = status;
	}

	public LocalDateTime getDeadline() {
		return deadline;
	}

	public void setDeadline(LocalDateTime deadline) {
		this.deadline = deadline;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	public boolean isDestactive() {
		return isDestactive;
	}

	public void setDestactive(boolean isDestactive) {
		this.isDestactive = isDestactive;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}



}
