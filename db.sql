-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 09 sep. 2024 à 10:38
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------

--
-- Structure de la table `book`
--

DROP TABLE IF EXISTS `book`;
CREATE TABLE IF NOT EXISTS `book` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `author` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `book`
--

INSERT INTO `book` (`id`, `author`, `price`, `title`) VALUES
(1, 'Chinua Achebe', 16.19, 'Things Fall Apart'),
(2, 'Hans Christian Andersen', 10.4, 'Fairy tales'),
(3, 'Dante Alighieri', 25.43, 'The Divine Comedy'),
(4, 'Unknown', 21.97, 'The Epic Of Gilgamesh'),
(5, 'Unknown', 23.53, 'The Book Of Job'),
(6, 'Unknown', 25.73, 'One Thousand and One Nights'),
(7, 'Unknown', 16.09, 'Njál\'s Saga'),
(8, 'Jane Austen', 25.23, 'Pride and Prejudice'),
(9, 'Honoré de Balzac', 19.91, 'Le Père Goriot'),
(10, 'Samuel Beckett', 13.87, 'Molloy, Malone Dies, The Unnamable, the trilogy'),
(11, 'Giovanni Boccaccio', 15.6, 'The Decameron'),
(12, 'Jorge Luis Borges', 10.41, 'Ficciones'),
(13, 'Emily Brontë', 11.24, 'Wuthering Heights'),
(14, 'Albert Camus', 14.96, 'The Stranger'),
(15, 'Paul Celan', 15.08, 'Poems'),
(16, 'Louis-Ferdinand Céline', 20.53, 'Journey to the End of the Night'),
(17, 'Miguel de Cervantes', 15.39, 'Don Quijote De La Mancha'),
(18, 'Geoffrey Chaucer', 21.38, 'The Canterbury Tales'),
(19, 'Anton Chekhov', 18.72, 'Stories'),
(20, 'Joseph Conrad', 19.45, 'Nostromo'),
(21, 'Charles Dickens', 15.1, 'Great Expectations'),
(22, 'Denis Diderot', 23.16, 'Jacques the Fatalist'),
(23, 'Alfred Döblin', 12.47, 'Berlin Alexanderplatz'),
(24, 'Fyodor Dostoevsky', 14.89, 'Crime and Punishment'),
(25, 'Fyodor Dostoevsky', 11.04, 'The Idiot'),
(26, 'Fyodor Dostoevsky', 16.53, 'The Possessed'),
(27, 'Fyodor Dostoevsky', 23.52, 'The Brothers Karamazov'),
(28, 'George Eliot', 25.99, 'Middlemarch'),
(29, 'Ralph Ellison', 17.43, 'Invisible Man'),
(30, 'Euripides', 15.16, 'Medea'),
(31, 'William Faulkner', 13.52, 'Absalom, Absalom!'),
(32, 'William Faulkner', 12.1, 'The Sound and the Fury'),
(33, 'Gustave Flaubert', 25.96, 'Madame Bovary'),
(34, 'Gustave Flaubert', 19.5, 'Sentimental Education'),
(35, 'Federico García Lorca', 25.6, 'Gypsy Ballads'),
(36, 'Gabriel García Márquez', 11.51, 'One Hundred Years of Solitude'),
(37, 'Gabriel García Márquez', 18.76, 'Love in the Time of Cholera'),
(38, 'Johann Wolfgang von Goethe', 17.26, 'Faust'),
(39, 'Nikolai Gogol', 20.03, 'Dead Souls'),
(40, 'Günter Grass', 22.37, 'The Tin Drum'),
(41, 'João Guimarães Rosa', 25.77, 'The Devil to Pay in the Backlands'),
(42, 'Knut Hamsun', 19.72, 'Hunger'),
(43, 'Ernest Hemingway', 11.3, 'The Old Man and the Sea'),
(44, 'Homer', 19.35, 'Iliad'),
(45, 'Homer', 20.86, 'Odyssey'),
(46, 'Henrik Ibsen', 20.23, 'A Doll\'s House'),
(47, 'James Joyce', 12.58, 'Ulysses'),
(48, 'Franz Kafka', 24.19, 'Stories'),
(49, 'Franz Kafka', 25.21, 'The Trial'),
(50, 'Franz Kafka', 11.5, 'The Castle'),
(51, 'Kālidāsa', 19.86, 'The recognition of Shakuntala'),
(52, 'Yasunari Kawabata', 22.79, 'The Sound of the Mountain'),
(53, 'Nikos Kazantzakis', 12.39, 'Zorba the Greek'),
(54, 'D. H. Lawrence', 15.56, 'Sons and Lovers'),
(55, 'Halldór Laxness', 14.65, 'Independent People'),
(56, 'Giacomo Leopardi', 16.57, 'Poems'),
(57, 'Doris Lessing', 12.91, 'The Golden Notebook'),
(58, 'Astrid Lindgren', 20.84, 'Pippi Longstocking'),
(59, 'Lu Xun', 23.45, 'Diary of a Madman'),
(60, 'Naguib Mahfouz', 12.76, 'Children of Gebelawi'),
(61, 'Thomas Mann', 15.42, 'Buddenbrooks'),
(62, 'Thomas Mann', 12.84, 'The Magic Mountain'),
(63, 'Herman Melville', 23.94, 'Moby Dick'),
(64, 'Michel de Montaigne', 23.16, 'Essays'),
(65, 'Elsa Morante', 17.97, 'History'),
(66, 'Toni Morrison', 10.41, 'Beloved'),
(67, 'Murasaki Shikibu', 20.1, 'The Tale of Genji'),
(68, 'Robert Musil', 11.29, 'The Man Without Qualities'),
(69, 'Vladimir Nabokov', 18.16, 'Lolita'),
(70, 'George Orwell', 14.9, 'Nineteen Eighty-Four'),
(71, 'Ovid', 10.04, 'Metamorphoses'),
(72, 'Fernando Pessoa', 11.5, 'The Book of Disquiet'),
(73, 'Edgar Allan Poe', 17.36, 'Tales'),
(74, 'Marcel Proust', 10.3, 'In Search of Lost Time'),
(75, 'François Rabelais', 21.41, 'Gargantua and Pantagruel'),
(76, 'Juan Rulfo', 18.17, 'Pedro Páramo'),
(77, 'Rumi', 16.6, 'The Masnavi'),
(78, 'Salman Rushdie', 18.52, 'Midnight\'s Children'),
(79, 'Saadi', 16.78, 'Bostan'),
(80, 'Tayeb Salih', 18.34, 'Season of Migration to the North'),
(81, 'José Saramago', 15.36, 'Blindness'),
(82, 'William Shakespeare', 11.78, 'Hamlet'),
(83, 'William Shakespeare', 18.82, 'King Lear'),
(84, 'William Shakespeare', 16.75, 'Othello'),
(85, 'Sophocles', 17.29, 'Oedipus the King'),
(86, 'Stendhal', 10.21, 'The Red and the Black'),
(87, 'Laurence Sterne', 21.19, 'The Life And Opinions of Tristram Shandy'),
(88, 'Italo Svevo', 17.33, 'Confessions of Zeno'),
(89, 'Jonathan Swift', 13.07, 'Gulliver\'s Travels'),
(90, 'Leo Tolstoy', 19.35, 'War and Peace'),
(91, 'Leo Tolstoy', 15.54, 'Anna Karenina'),
(92, 'Leo Tolstoy', 25.66, 'The Death of Ivan Ilyich'),
(93, 'Mark Twain', 23.66, 'The Adventures of Huckleberry Finn'),
(94, 'Valmiki', 15.31, 'Ramayana'),
(95, 'Virgil', 11.6, 'The Aeneid'),
(96, 'Vyasa', 18.05, 'Mahabharata'),
(97, 'Walt Whitman', 13.46, 'Leaves of Grass'),
(98, 'Virginia Woolf', 19.13, 'Mrs Dalloway'),
(99, 'Virginia Woolf', 13.29, 'To the Lighthouse'),
(100, 'Marguerite Yourcenar', 15.05, 'Memoirs of Hadrian');

-- --------------------------------------------------------

--
-- Structure de la table `book_order`
--

DROP TABLE IF EXISTS `book_order`;
CREATE TABLE IF NOT EXISTS `book_order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `status` varchar(255) DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhom18uhrx4lj8p8ebqdmkieos` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `book_order_item`
--

DROP TABLE IF EXISTS `book_order_item`;
CREATE TABLE IF NOT EXISTS `book_order_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `book_id` bigint NOT NULL,
  `book_order_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKndt6gkmw1bn4kybbyhq3h0fey` (`book_id`),
  KEY `FKo71d59to1wn4lvcsepaxchdjf` (`book_order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKsb8bbouer5wak8vyiiy4pf2bx` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `book_order`
--
ALTER TABLE `book_order`
  ADD CONSTRAINT `FKhom18uhrx4lj8p8ebqdmkieos` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `book_order_item`
--
ALTER TABLE `book_order_item`
  ADD CONSTRAINT `FKndt6gkmw1bn4kybbyhq3h0fey` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  ADD CONSTRAINT `FKo71d59to1wn4lvcsepaxchdjf` FOREIGN KEY (`book_order_id`) REFERENCES `book_order` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
