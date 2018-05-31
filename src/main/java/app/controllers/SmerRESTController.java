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

import app.jpa.Smer;
import app.reps.SmerRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(tags = {"Smer CRUD operacije"})
public class SmerRESTController {

	@Autowired
	private SmerRepository smerRepository;

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@GetMapping("smer")
	@ApiOperation(value = "Vrаća kolekciju svih smer iz baze podataka")
	public Collection<Smer> getSmerovi() {
		return smerRepository.findAll();
	}

	@GetMapping("smer/{id}")
	@ApiOperation(value = "Vrаća smer iz baze podataka ciji je ID vrednost prosleđena kao path varijabla")
	public Smer getSmerovi(@PathVariable("id") Integer id) {
		return smerRepository.getOne(id);
	}

	@GetMapping("smerNaziv/{naziv}")
	@ApiOperation(value = "Vrаća smer iz baze podataka koji u naziv sadrzi string prosleđen kao path varijabla")
	public Collection<Smer> getSmerByNaziv(@PathVariable("naziv") String naziv) {
		return smerRepository.findByNazivContainingIgnoreCase(naziv);
	}

	@DeleteMapping("smer/{id}")
	@CrossOrigin
	@ApiOperation(value = "Briše smer iz baze podataka ciji je ID vrednost rosleđena kao path varijabla")
	public ResponseEntity<Smer> deleteSmer(@PathVariable("id") Integer id) {
		if (smerRepository.existsById(id)) {
			smerRepository.deleteById(id);
			if (id == -100)
				jdbcTemplate.execute("INSERT INTO \"smer\"(\"id\", \"naziv\", \"oznaka\")\r\n"
						+ "VALUES(-100, 'Test SoapUI smer', 'Test oznaka')");
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	// insert - Ovde koristimo POST metodu
	@PostMapping("smer")
	@CrossOrigin
	@ApiOperation(value = "Insertuje smer u bazu podataka")
	public ResponseEntity<Smer> insertArtikl(@RequestBody Smer smer) {
		if (smerRepository.existsById(smer.getId())) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		smerRepository.save(smer);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	//update - Ovde koristimo PUT metodu
	@PutMapping("smer")
	@CrossOrigin
	@ApiOperation(value = "Modifikuje smer iz baze podataka")
	public ResponseEntity<Smer> updateArtikl(@RequestBody Smer smer){
		if(smerRepository.existsById(smer.getId())) {
			smerRepository.save(smer);
			return new ResponseEntity<> (HttpStatus.OK);
		}
		return new ResponseEntity<> (HttpStatus.NO_CONTENT);
	}

}
