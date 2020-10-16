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