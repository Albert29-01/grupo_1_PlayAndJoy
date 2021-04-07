-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2021 at 08:26 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `playandjoy`
--

-- --------------------------------------------------------

--
-- Table structure for table `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Vino'),
(2, 'Café'),
(3, 'Música'),
(4, 'Libro');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `id_product` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `nombre`, `id_product`, `created_at`, `updated_at`, `deleted_at`) VALUES
(10, 'CHEMEX PARA 6 TAZAS Y 100 FILTROS-1616107581304.png', 12, '2021-03-18 22:46:21', '2021-03-18 22:46:21', NULL),
(11, 'PRENSA FRANCESA – MODELO BRAZIL DE 3 POCILLOS – (COLOR NEGRO)-1616107767150.jpeg', 13, '2021-03-18 22:49:27', '2021-03-18 22:49:27', NULL),
(15, 'KIT AEROPRESS-1616441362722.png', 17, '2021-03-22 19:29:22', '2021-03-22 19:29:22', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `precio` decimal(12,2) NOT NULL,
  `detalle` varchar(200) NOT NULL,
  `info_ad` varchar(200) DEFAULT NULL,
  `id_categoria` int(11) NOT NULL,
  `stock` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `detalle`, `info_ad`, `id_categoria`, `stock`, `created_at`, `updated_at`, `deleted_at`) VALUES
(12, 'CHEMEX PARA 6 TAZAS Y 100 FILTROS', '12050.00', 'En la Chemex podés preparar un café donde resalten todas las notas del café!\r\n\r\nEn cuanto a la preparación, sugerimos una molienda media y tener una relación de 15 gramos de Agua por cada gramo de caf', '', 2, 10, '2021-03-18 22:46:21', '2021-03-18 22:46:21', NULL),
(13, 'PRENSA FRANCESA – MODELO BRAZIL DE 3 POCILLOS – (COLOR NEGRO)', '4990.00', 'En la prensa francesa Brazil de BODUM® podrás preparar una excelente taza de café de la forma más simple: procurá añadir café molido grueso, verter agua caliente, esperar 4 minutos y luego empujar len', '', 2, 10, '2021-03-18 22:49:27', '2021-03-18 22:49:27', NULL),
(17, 'KIT AEROPRESS', '8200.00', 'Te presentamos la Aeropress en un kit con 350 filtros, una cuchara y el removedor de Café para que puedas preparar el mejor café de una manera más ágil.\r\n\r\nPodés prepararlo tanto en el método directo ', '', 2, 20, '2021-03-22 19:29:22', '2021-03-22 19:29:22', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `suscripciones`
--

CREATE TABLE `suscripciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `precio` decimal(12,2) NOT NULL,
  `detalle` varchar(200) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `suscripciones`
--

INSERT INTO `suscripciones` (`id`, `nombre`, `precio`, `detalle`, `created_at`, `updated_at`, `deleted_at`) VALUES
(3, 'basico', '123.00', 'Esta es una nueva suscripcion', '2021-03-11 23:23:06', '2021-03-11 23:23:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `admin` int(11) DEFAULT 0,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(120) NOT NULL,
  `birth_date` date NOT NULL,
  `domicilio` varchar(100) NOT NULL,
  `localidad` varchar(100) NOT NULL,
  `provincia` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `admin`, `first_name`, `last_name`, `imagen`, `email`, `password`, `birth_date`, `domicilio`, `localidad`, `provincia`, `created_at`, `deleted_at`, `updated_at`) VALUES
(10, 0, 'Albert', 'Simonetti', 'undefined-1617634659503.jpg', 'albert@gmail.com', '$2a$12$ftQ3rtE5MIeXEvEzb5Q7vekopxKlyDQcbgP4LcgrEgfYqulbY6Uca', '1967-01-29', 'Calle Falsa 123', 'VILLA DEVOTO', 'Ciudad Autónoma de Buenos Aires', '2021-04-03 14:23:08', NULL, '2021-04-05 14:57:39'),
(11, 0, 'Pedro', 'Elescamoso', 'undefined-1617465571280.jpg', 'pedro@gmail.com', '$2a$12$nXFwB8QBeLiOpvYBOttcAeuTQxTO5M8m238xJ74qZQWrEVxKA1ecy', '1960-08-26', 'Calle Falsa 123', '11 DE SEPTIEMBRE', 'Buenos Aires', '2021-04-03 15:59:31', NULL, '2021-04-03 15:59:31'),
(12, 1, 'Admin', 'Admin', 'undefined-1617632033828.png', 'admin@admin.com.ar', '$2a$12$2Wh04SCeMxGk2eM.Si9uJuXZCELo4FZ1k288/rvb7iIDlknHZd0QW', '2020-11-16', 'Calle Falsa 123', 'CIUDAD DE BUENOS AIRES', 'Ciudad Autónoma de Buenos Aires', '2021-04-05 14:13:54', NULL, '2021-04-05 14:13:54'),
(13, 0, 'Noelia', 'Carosella', 'noe.carosella@gmail.com-1617646756712.jpg', 'noe.carosella@gmail.com', '$2a$12$tiXQxU199laf2IYuH9QeJO1aLxrbyCdDgxP5UQYyAfuRAPJqdDpsW', '1988-07-27', 'Elm Street 654', 'RAMOS MEJIA', 'Buenos Aires', '2021-04-05 18:19:17', NULL, '2021-04-05 18:19:17');

-- --------------------------------------------------------

--
-- Table structure for table `ventas_productos`
--

CREATE TABLE `ventas_productos` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ventas_suscripciones`
--

CREATE TABLE `ventas_suscripciones` (
  `id` int(11) NOT NULL,
  `id_suscripcion` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suscripciones`
--
ALTER TABLE `suscripciones`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ventas_productos`
--
ALTER TABLE `ventas_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ventas_suscripciones`
--
ALTER TABLE `ventas_suscripciones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `suscripciones`
--
ALTER TABLE `suscripciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `ventas_productos`
--
ALTER TABLE `ventas_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ventas_suscripciones`
--
ALTER TABLE `ventas_suscripciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
