package app.reps;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import app.jpa.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

	Collection<Student> findByBrIndexaContainingIgnoreCase(String brIndex);
	Collection<Student> findByPrezimeContainingIgnoreCase(String prezime);
	
}
