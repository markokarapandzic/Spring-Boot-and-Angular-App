INSERT INTO "smer"("id", "naziv", "oznaka")
VALUES(nextval('smer_seq'), 'Programiranje', 'IT');
INSERT INTO "smer"("id", "naziv", "oznaka")
VALUES(nextval('smer_seq'), 'Menadzment', 'MN');
INSERT INTO "smer"("id", "naziv", "oznaka")
VALUES(nextval('smer_seq'), 'Industrisko Inzenjerstvo', 'II');
INSERT INTO "smer"("id", "naziv", "oznaka")
VALUES(-100, 'Informacioni Sistemi', 'IIS');

INSERT INTO "grupa"("id", "oznaka", "smer")
VALUES(nextval('grupa_seq'), "P1", 1);
INSERT INTO "grupa"("id", "oznaka", "smer")
VALUES(nextval('grupa_seq'), 'P2', 2);
INSERT INTO "grupa"("id", "oznaka", "smer")
VALUES(-100, 'P3', 3);

INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES(nextval('projekat_seq'), 'Regulacija', 'REG', 'Neki opis projekta');
INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES(nextval('projekat_seq'), 'Automatizacija', 'AUT', 'Neki opis projekta');
INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES(nextval('projekat_seq'), 'Sistematizacija', 'SYS', 'Neki opis projekta');

INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES(nextval('projekat_seq'), 'Simulacija', 'SIM', 'Neki opis projekta');
INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES(nextval('projekat_seq'), 'Web App', 'WEB', 'Neki opis projekta');
INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES(-100, 'Android App', 'AND', 'Neki opis projekta');

INSERT INTO "student"("id", "ime", "prezime", "broj_indexa", "grupa", "projekat")
VALUES (nextval('student_seq'), 'Marko', "Markovic", 'IT??/????', 1, 5);
INSERT INTO "student"("id", "ime", "prezime", "broj_indexa", "grupa", "projekat")
VALUES (nextval('student_seq'), 'Jovan', "Jovanovic", 'II??/????', 1, 3);
INSERT INTO "student"("id", "ime", "prezime", "broj_indexa", "grupa", "projekat")
VALUES (nextval('student_seq'), 'Milan', "Milanovic", 'IT??/????', 2, 2);
INSERT INTO "student"("id", "ime", "prezime", "broj_indexa", "grupa", "projekat")
VALUES (nextval('student_seq'), 'Jovana', "Javanovic", 'IM??/????', 1, 3);
INSERT INTO "student"("id", "ime", "prezime", "broj_indexa", "grupa", "projekat")
VALUES (nextval('student_seq'), 'Milovan', "Jovanovmali", 'IT??/????', 1, 1);

INSERT INTO "student"("id", "ime", "prezime", "broj_indexa", "grupa", "projekat")
VALUES (nextval('student_seq'), 'Alexa', "Neciji", 'IT??/????', 2, 3);
INSERT INTO "student"("id", "ime", "prezime", "broj_indexa", "grupa", "projekat")
VALUES (nextval('student_seq'), 'Milutin', "Milutinovic", 'II??/????', 1, 4);
INSERT INTO "student"("id", "ime", "prezime", "broj_indexa", "grupa", "projekat")
VALUES (nextval('student_seq'), 'Goran', "Goranovic", 'IT??/????', 1, 5);
INSERT INTO "student"("id", "ime", "prezime", "broj_indexa", "grupa", "projekat")
VALUES (nextval('student_seq'), 'Marija', "Javanovic", 'IM??/????', 2, 3);
INSERT INTO "student"("id", "ime", "prezime", "broj_indexa", "grupa", "projekat")
VALUES (nextval('student_seq'), 'Jelena', "Mitrovic", 'IT??/????', 1, 1);

INSERT INTO "student"("id", "ime", "prezime", "broj_indexa", "grupa", "projekat")
VALUES (-100, 'Dragan', "Cavic", 'IT??/????', 1, 5);