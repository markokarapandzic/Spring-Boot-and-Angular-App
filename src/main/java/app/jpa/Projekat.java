package app.jpa;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * The persistent class for the porudzbina database table.
 * 
 */
@Entity
@NamedQuery(name = "Projekat.findAll", query = "SELECT p FROM Projekat p")
@JsonIgnoreProperties({ "hibernateLazyInitalizer", "handler" })
public class Projekat implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "PROJEKAT_ID_GENERATOR", sequenceName = "PROJEKAT_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PROJEKAT_ID_GENERATOR")
	private Integer id;

	private String naziv;
	private String oznaka;
	private String opis;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getOznaka() {
		return oznaka;
	}

	public void setOznaka(String oznaka) {
		this.oznaka = oznaka;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

}
