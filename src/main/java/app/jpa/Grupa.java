package app.jpa;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

/**
 * The persistent class for the GRUPA database table.
 * 
 */
@Entity
@NamedQuery(name = "Grupa.findAll", query = "SELECT a FROM Grupa a")
@JsonIgnoreProperties({ "hibernateLazyInitalizer", "handler" })
public class Grupa implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "GRUPA_ID_GENERATOR", sequenceName = "GRUPA_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GRUPA_ID_GENERATOR")
	private Integer id;

	private String oznaka;

	// bi-directional many-to-one association to Smer
	@ManyToOne
	@JoinColumn(name = "smer")
	private Smer smer;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getOznaka() {
		return oznaka;
	}

	public void setOznaka(String oznaka) {
		this.oznaka = oznaka;
	}

	public Smer getSmer() {
		return smer;
	}

	public void setSmer(Smer smer) {
		this.smer = smer;
	}

}
