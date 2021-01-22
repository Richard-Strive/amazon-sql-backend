
CREATE TABLE IF NOT EXISTS
products(
    id INTEGER GENERATED ALWAYS  AS IDENTITY,
    headline VARCHAR(500) NOT NULL,
    subhead VARCHAR(500) NOT NULL,
    content VARCHAR(500) NOT NULL,
    cover VARCHAR(500) NOT NULL,
    authors_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(authors_id) REFERENCES authors(id)
);



CREATE TABLE IF NOT EXISTS
reviews(
    id INTEGER GENERATED ALWAYS  AS IDENTITY,
    category VARCHAR(50) NOT NULL,
    aricle_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(aricle_id) REFERENCES aricle(id)
);

/*
Aggiungere dettagli
*/