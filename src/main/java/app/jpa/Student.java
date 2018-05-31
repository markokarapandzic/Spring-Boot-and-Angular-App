package app.jpa;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@NamedQuery(name = "Student.findAll", query = "SELECT p FROM Student p")
@JsonIgnoreProperties({ "hibernateLazyInitalizer", "handler" })
public class Student implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "STUDENT_ID_GENERATOR", sequenceName = "STUDENT_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "STUDENT_ID_GENERATOR")
	private Integer id;

	private String ime;
	private String prezime;
	private String brIndexa;

	@ManyToOne
	@JoinColumn(name = "grupa")
	private Grupa grupa;

	@ManyToOne
	@JoinColumn(name = "projekat")
	private Projekat projekat;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPrezime() {
		return prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public String getBrIndexa() {
		return brIndexa;
	}

	public void setBrIndexa(String brIndexa) {
		this.brIndexa = brIndexa;
	}

	public Grupa getGrupa() {
		return grupa;
	}

	public void setGrupa(Grupa grupa) {
		this.grupa = grupa;
	}

	public Projekat getProjekat() {
		return projekat;
	}

	public void setProjekat(Projekat projekat) {
		this.projekat = projekat;
	}

}
