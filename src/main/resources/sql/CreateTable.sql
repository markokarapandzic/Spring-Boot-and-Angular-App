DROP TABLE IF EXISTS artikl CASCADE;
DROP TABLE IF EXISTS dobavljac CASCADE;
DROP TABLE IF EXISTS porudzbina CASCADE;
DROP TABLE IF EXISTS stavka_porudzbine CASCADE;

DROP SEQUENCE IF EXISTS artikl_seq;
DROP SEQUENCE IF EXISTS dobavljac_seq;
DROP SEQUENCE IF EXISTS porudzbina_seq;
DROP SEQUENCE IF EXISTS stavka_porudzbine_seq;

CREATE TABLE artikl(
	id integer NOT NULL,
    naziv varchar(50) NOT NULL,
    proizvodjac varchar(50)
);

CREATE TABLE dobavljac(
	id integer NOT NULL,
    naziv VARCHAR(50) NOT NULL,
    adresa VARCHAR(200) NOT NULL,
    kontakt VARCHAR(100) NOT NULL
);

CREATE TABLE porudzbina(
	id integer NOT NULL,
    datum date NOT NULL,
    isporuceno date NOT NULL,
    iznos numeric NOT NULL,
    placeno boolean,
    dobavljac integer NOT NULL
);

CREATE TABLE stavka_porudzbine(
	id integer NOT NULL,
    redni_broj integer NOT NULL,
    kolicina numeric NOT NULL,
    jedinica_mere VARCHAR(50) NOT NULL,
    cena numeric NOT NULL,
    porudzbina integer NOT NULL,
    artikl integer NOT NULL
);

ALTER TABLE artikl ADD CONSTRAINT PK_Artikl
	PRIMARY KEY(id);
ALTER TABLE dobavljac ADD CONSTRAINT PK_Dobavljac
	PRIMARY KEY(id);
ALTER TABLE porudzbina ADD CONSTRAINT PK_Porudzbina
	PRIMARY KEY(id);
ALTER TABLE stavka_porudzbine ADD CONSTRAINT PK_Stavka_Porudzbine
	PRIMARY KEY(id);

ALTER TABLE porudzbina ADD CONSTRAINT FK_Porudzbina_Dobavljac
	FOREIGN KEY (dobavljac) REFERENCES dobavljac (id);
ALTER TABLE stavka_porudzbine ADD CONSTRAINT FK_Stavka_Porudzbine_Porudzbina
	FOREIGN KEY (porudzbina) REFERENCES porudzbina (id);
ALTER TABLE stavka_porudzbine ADD CONSTRAINT FK_Stavka_Porudzbine_Artikl
	FOREIGN KEY (artikl) REFERENCES artikl (id);

CREATE INDEX IDXFK_Porudzbina_Dobavljac
	ON porudzbina (dobavljac);
CREATE INDEX IDXFK_Stavka_Porudzbine_Porudzbina
	ON stavka_porudzbine (porudzbina);
CREATE INDEX IDXFK_Stavka_Porudzbine_Artikl
	ON stavka_porudzbine (artikl);
	
CREATE SEQUENCE artikl_seq
INCREMENT 1;
CREATE SEQUENCE dobavljac_seq
INCREMENT 1;
CREATE SEQUENCE porudzbina_seq
INCREMENT 1;
CREATE SEQUENCE stavka_porudzbine_seq
INCREMENT 1;

