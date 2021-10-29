/*
 * System Init. Script
 *
 * Agnostic SQL Script to initialize the DB.
 *
 * Author: FlyingCat
 * Date: 26/10/2021
 *
 */
DROP DATABASE IF EXISTS system_db;
CREATE DATABASE IF NOT EXISTS system_db;
USE system_db;

-- Table: Users
DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id                      INT NOT NULL AUTO_INCREMENT,
    username                VARCHAR(64),
    first_name              VARCHAR(64),
    last_name               VARCHAR(64),
    email                   VARCHAR(64),
    password                VARCHAR(64),
    PRIMARY KEY (id)
);

-- Table: Ledger
DROP TABLE IF EXISTS ledger;
CREATE TABLE ledger (
    id                      INT NOT NULL AUTO_INCREMENT,
    user_id                 INT NOT NULL,
    transaction_type_id     INT NOT NULL,
    amount                  DECIMAL(13,2) NULL DEFAULT '0.00',
    description             VARCHAR(128),
    created_on              DATETIME,
    added_on                DATETIME,
    PRIMARY KEY (id)
);

-- Table: transaction_type
DROP TABLE IF EXISTS transaction_type;
CREATE TABLE transaction_type (
    id              INT NOT NULL AUTO_INCREMENT,
    description     VARCHAR(64),
    PRIMARY KEY (id)
);

-- Foreign Keys
ALTER TABLE ledger ADD CONSTRAINT fk_ledger__user FOREIGN KEY (user_id) REFERENCES user(id);
ALTER TABLE ledger ADD CONSTRAINT fk_ledger__trans_type FOREIGN KEY (transaction_type_id) REFERENCES transaction_type(id);
