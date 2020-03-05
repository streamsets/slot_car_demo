CREATE DATABASE IF NOT EXISTS `racing`;

-- -----------------------------------------------------
-- Schema racing
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `racing` DEFAULT CHARACTER SET utf8 ;
USE `racing` ;

-- -----------------------------------------------------
-- Table `racing`.`players`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `racing`.`players` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(200) NULL,
  `email` VARCHAR(200) NULL,
  `phone` VARCHAR(45) NULL,
  `optin` TINYINT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `racing`.`games`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `racing`.`games` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `player1` INT NULL,
  `player2` INT NULL,
  `start_time` DATETIME NULL,
  `stop_time` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `player1_idx` (`player1` ASC) VISIBLE,
  INDEX `player2_idx` (`player2` ASC) VISIBLE,
  CONSTRAINT `players`
    FOREIGN KEY (`player1`)
    REFERENCES `racing`.`players` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `player2`
    FOREIGN KEY (`player2`)
    REFERENCES `racing`.`players` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `racing`.`current_game`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `racing`.`current_game` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `game`INT,
  PRIMARY KEY (`id`),
  CONSTRAINT `games`
    FOREIGN KEY (`game`)
    REFERENCES `racing`.`games` (`id`)
);

-- -----------------------------------------------------
-- Table `racing`.`laps`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `racing`.`laps` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `game` INT NULL,
  `number` INT NULL,
  `duration` INT NULL,
  `player` INT NULL,
  `time` DOUBLE NULL,
  PRIMARY KEY (`id`),
  INDEX `game_idx` (`game` ASC) VISIBLE,
  CONSTRAINT `game`
    FOREIGN KEY (`game`)
    REFERENCES `racing`.`games` (`id`),
  CONSTRAINT `player`
    FOREIGN KEY (`player`)
    REFERENCES `racing`.`players` (`id`));

-- -----------------------------------------------------
-- Table `racing`.`winners`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `racing`.`winners` (
	`id` INT AUTO_INCREMENT NOT NULL,
	`game` INT NULL,
	`player` INT NULL,
	PRIMARY KEY (`id`),
  CONSTRAINT `winners_game`
    FOREIGN KEY (`game`)
    REFERENCES `racing`.`games` (`id`),
  CONSTRAINT `winners_player`
   	FOREIGN KEY (`player`)
   	REFERENCES `racing`.`players` (`id`)
);

-- -----------------------------------------------------
-- Table `racing`.`best_players_laps`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `racing`.`best_players_laps` (
  `player_id` INT NULL,
  `name`  VARCHAR(200) NULL,
  `min_duration` INT NULL   
);


-- -----------------------------------------------------
-- Table `racing`.`best_players_races`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `racing`.`best_players_races` (
  `player_id` INT NULL,
  `name`  VARCHAR(200) NULL,
  `sum_duration` INT NULL   
);



INSERT INTO `racing`.`current_game` (`id`) VALUES ('1');

-- INSERT INTO `racing`.`players` (`id`, `name`, `email`, `optin`) VALUES ('1', 'Antonin', 'antonin@streamsets.com', '1');
-- INSERT INTO `racing`.`players` (`id`, `name`, `email`, `optin`) VALUES ('2', 'Boris', 'boris@streamsets.com', '1');
-- INSERT INTO `racing`.`games` (`id`, `player1`, `player2`, `start_time`, `current`) VALUES ('1', '1', '2', NOW(), '1');