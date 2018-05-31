package app.reps;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import app.jpa.Projekat;

public interface ProjekatRepository extends JpaRepository<Projekat, Integer> {

	Collection<Projekat> findByNazivContainingIgnoreCase(String Naziv);
	
}
