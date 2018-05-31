package app.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import app.jpa.Grupa;
import app.reps.GrupaRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(tags = { "Grupa CRUD operacije" })
public class GrupaRESTController {

	@Autowired
	private GrupaRepository grupaRepository;

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@GetMapping("grupa")
	@ApiOperation(value = "Vrаća grupe svih artikala iz baze podataka")
	public Collection<Grupa> getGrupe() {
		return grupaRepository.findAll();
	}

	@GetMapping("grupa/{id}")
	@ApiOperation(value = "Vrаća grupu iz baze podataka ciji je ID vrednost prosleđena kao path varijabla")
	public Grupa getGrupa(@PathVariable("id") Integer id) {
		return grupaRepository.getOne(id);
	}

	@GetMapping("grupaOznaka/{oznaka}")
	@ApiOperation(value = "Vrаća grupu iz baze podataka koji u naziv sadrzi string prosleđen kao path varijabla")
	public Collection<Grupa> getGrupaByOznaka(@PathVariable("oznaka") String oznaka) {
		return grupaRepository.findByOznakaContainingIgnoreCase(oznaka);
	}

	@DeleteMapping("grupa/{id}")
	@CrossOrigin
	@ApiOperation(value = "Briše grupe iz baze podataka ciji je ID vrednost prosleđena kao path varijabla")
	public ResponseEntity<Grupa> deleteGrupa(@PathVariable("id") Integer id) {
		if (grupaRepository.existsById(id)) {
			grupaRepository.deleteById(id);
			if (id == -100)
				jdbcTemplate.execute("INSERT INTO \"grupa\"(\"id\", \"oznaka\", \"smer\")\r\n"
						+ "VALUES(-100, 'Test SoapUI grupa', 1)");
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	// insert - Ovde koristimo POST metodu
	@PostMapping("grupa")
	@CrossOrigin
	@ApiOperation(value = "Insertuje grupa u bazu podataka")
	public ResponseEntity<Grupa> insertGrupa(@RequestBody Grupa grupa) {
		if (grupaRepository.existsById(grupa.getId())) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		grupaRepository.save(grupa);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	// update - Ovde koristimo PUT metodu
	@PutMapping("grupa")
	@CrossOrigin
	@ApiOperation(value = "Modifikuje artikl iz baze podataka")
	public ResponseEntity<Grupa> updateArtikl(@RequestBody Grupa grupa) {
		if (grupaRepository.existsById(grupa.getId())) {
			grupaRepository.save(grupa);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
