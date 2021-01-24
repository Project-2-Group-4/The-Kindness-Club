drop database if exists sequelize_passport;
create database sequelize_passport;

USE sequelize_passport;



-- CREATE TABLE Tasks
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	task_name varchar(255) NOT NULL,
--     point_value INTEGER NOT NULL,
-- 	PRIMARY KEY (id)
-- );

INSERT INTO Tasks (task_name, point_value) VALUES ('be nice',100);
INSERT INTO Tasks (task_name, point_value) VALUES ('compliment a freind',100);

-- SELECT * FROM Tasks
-- ORDER BY RAND()
-- LIMIT 1