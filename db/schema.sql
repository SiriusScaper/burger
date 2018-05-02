drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers
(
    id int not null
    AUTO_INCREMENT,
    burger_name VARCHAR
    (255) not null,
    devoured BOOLEAN,
    primary key
    (id)
);