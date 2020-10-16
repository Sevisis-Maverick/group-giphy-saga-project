CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (500) NOT NULL,
    "category" VARCHAR (100) NOT NULL
);

--seed favorites
INSERT INTO "favorites" ("url", "category")
VALUES ('https://media2.giphy.com/media/dIVa0pwco4Mj5rQ7gy/giphy.gif?cid=cbffb75ea2g5afn4rlg7bd3e5vwgh2wbrgtn111p1xpxdhx1&rid=giphy.gif', 'funny')

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');
--testing


--make it so the category column can be null.. this is so we can add data to this table and users can UPDATE the category at a later time
ALTER TABLE favorites ALTER category DROP NOT NULL;

--add a foreign key that references id from category table
ALTER TABLE favorites ADD COLUMN category_id INTEGER REFERENCES category;
