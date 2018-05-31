package app.reps;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import app.jpa.Smer;

public interface SmerRepository extends JpaRepository<Smer, Integer> {

	Collection<Smer> findByNazivContainingIgnoreCase(String naziv);

}
