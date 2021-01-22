
CREATE TABLE IF NOT EXISTS
products(
    id INTEGER GENERATED ALWAYS  AS IDENTITY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    brand VARCHAR(50) NOT NULL,
    imageUrl VARCHAR(500) NOT NULL,
    price INT NOT NULL,
    category VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);



CREATE TABLE IF NOT EXISTS
reviews(
    id INTEGER GENERATED ALWAYS  AS IDENTITY,
    comment VARCHAR(50) NOT NULL,
    rate INT NOT NULL,
    products_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(products_id) REFERENCES products(id)
);



/*
   {
        "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
        "name": "app test 1",  //REQUIRED
        "description": "somthing longer", //REQUIRED
        "brand": "nokia", //REQUIRED
        "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
        "price": 100, //REQUIRED
        "category": "smartphones"
        "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
        "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
    }
    And the reviews looks like:
    {
        "_id": "123455", //SERVER GENERATED
        "comment": "A good book but definitely I don't like many parts of the plot", //REQUIRED
        "rate": 3, //REQUIRED, max 5
        "productId": "5d318e1a8541744830bef139", //REQUIRED reference to Products Table
        "createdAt": "2019-08-01T12:46:45.895Z"  //SERVER GENERATED
    },
*/
    -- ts TIMESTAMP,