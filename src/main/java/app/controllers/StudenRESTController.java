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

import app.jpa.Student;
import app.reps.StudentRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(tags = { "Student CRUD operacije" })
public class StudenRESTController {

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@GetMapping("student")
	@ApiOperation(value = "Vrаća kolekciju svih studenata iz baze podataka")
	public Collection<Student> getStudenti() {
		return studentRepository.findAll();
	}

	@GetMapping("student/{id}")
	@ApiOperation(value = "Vrаća studenta iz baze podataka ciji je ID vrednost prosleđena kao path varijabla")
	public Student getStudent(@PathVariable("id") Integer id) {
		return studentRepository.getOne(id);
	}

	@GetMapping("studentIndex/{index}")
	@ApiOperation(value = "Vrаća studenta iz baze podataka koji ima odgovarajuci broj indexa")
	public Collection<Student> getStudentByBrIndexa(@PathVariable("index") String index) {
		return studentRepository.findByBrIndexaContainingIgnoreCase(index);
	}

	@GetMapping("studentPrezime/{prezime}")
	@ApiOperation(value = "Vrаća studenta iz baze podataka koji ima odgovarajuce prezime")
	public Collection<Student> getStudentByPrezime(@PathVariable("prezime") String prezime) {
		return studentRepository.findByPrezimeContainingIgnoreCase(prezime);
	}

	@DeleteMapping("student/{id}")
	@CrossOrigin
	@ApiOperation(value = "Briše studenta iz baze podataka ciji je ID vrednost prosleđena kao path varijabla")
	public ResponseEntity<Student> deleteStudent(@PathVariable("id") Integer id) {
		if (studentRepository.existsById(id)) {
			studentRepository.deleteById(id);
			if (id == -100)
				jdbcTemplate.execute(
						"INSERT INTO \"student\"(\"id\", \"ime\", \"prezime\", \"broj_indexa\", \"grupa\", \"projekat\")\r\n"
								+ "VALUES(-100, 'Test Ime, 'Test Prezime', 'Test Index', '1', '1')");
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	// insert - Ovde koristimo POST metodu
	@PostMapping("student")
	@CrossOrigin
	@ApiOperation(value = "Insertuje studenta u bazu podataka")
	public ResponseEntity<Student> insertArtikl(@RequestBody Student student) {
		if (studentRepository.existsById(student.getId())) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		studentRepository.save(student);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	// update - Ovde koristimo PUT metodu
	@PutMapping("student")
	@CrossOrigin
	@ApiOperation(value = "Modifikuje studenta iz baze podataka")
	public ResponseEntity<Student> updateArtikl(@RequestBody Student student) {
		if (studentRepository.existsById(student.getId())) {
			studentRepository.save(student);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
