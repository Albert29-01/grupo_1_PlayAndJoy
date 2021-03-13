CREATE DATABASE  IF NOT EXISTS `playandjoy` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `playandjoy`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: playandjoy
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Vino'),(2,'Café'),(3,'Música'),(4,'Libro');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `id_product` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'CAFETERA-1615417650729.jpg',2,'2021-03-06 14:48:45','2021-03-10 23:07:30',NULL),(2,'CAFETERA-1615417685278.jpg',3,'2021-03-06 15:06:33','2021-03-10 23:08:05',NULL),(3,'chocolate-1615043284845.jpg',4,'2021-03-06 15:08:04','2021-03-06 15:08:04',NULL),(4,'chocolate-1615043390671.jpg',5,'2021-03-06 15:09:50','2021-03-06 15:09:50',NULL),(5,'celular-1615043592513.jpg',6,'2021-03-06 15:13:12','2021-03-06 15:13:12',NULL),(6,'taza-1615043938451.jpg',7,'2021-03-06 15:18:58','2021-03-06 15:18:58',NULL),(7,'Tostadora-1615133311799.jpg',9,'2021-03-07 16:08:32','2021-03-07 16:08:32',NULL),(8,'vaso de vidrio-1615330252184.jpg',10,'2021-03-09 22:50:52','2021-03-09 22:50:52',NULL),(9,'termo stanley-1615331164604.jpg',11,'2021-03-09 23:06:04','2021-03-09 23:06:04',NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `precio` decimal(12,2) NOT NULL,
  `detalle` varchar(200) NOT NULL,
  `info_ad` varchar(200) DEFAULT NULL,
  `id_categoria` int(11) NOT NULL,
  `stock` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'televisor',123.00,'hola','Hola como estas',0,0,'2021-03-05 23:27:50','2021-03-05 23:27:50','2021-03-13 20:50:22'),(2,'CAFETERA',54321.00,'texto editado','otro texto editado',1,10,'2021-03-06 14:48:44','2021-03-10 23:07:30',NULL),(3,'CAFETERA',123456.00,'hola','acá estamos entrando en panico',3,0,'2021-03-06 15:06:33','2021-03-10 23:08:05',NULL),(4,'chocolate',4568.00,'chau','otra vez probando',0,0,'2021-03-06 15:08:04','2021-03-06 15:08:04',NULL),(5,'chocolate',4568.00,'chau de nuevo','otra vez y van...',0,0,'2021-03-06 15:09:50','2021-03-06 15:09:50','2021-03-13 20:47:52'),(6,'celular',456.00,'como estan','volviendonos locos',0,0,'2021-03-06 15:13:12','2021-03-06 15:13:12',NULL),(7,'taza',59.00,'ya no damos mas','Se nos quemaron los papeles',0,0,'2021-03-06 15:18:58','2021-03-06 15:18:58',NULL),(8,'Tostadora',150.00,'Esto es una tostadora economica','No le pidas mucho más que no te queme las tostadas',0,0,'2021-03-07 16:01:08','2021-03-07 16:01:08','2021-03-13 20:51:11'),(9,'Tostadora',150.00,'Esto es una tostadora economica','Luce como un perro pero es una tostadora',0,0,'2021-03-07 16:08:31','2021-03-07 16:08:31',NULL),(10,'vaso de vidrio',1000000.00,'es un vaso de cristal','aunq parece un perro',1,0,'2021-03-09 22:50:52','2021-03-09 23:31:32','2021-03-09 23:31:32'),(11,'termo stanley',5000000.00,'con este medio termo, te sacamos un riñon','yafu\'',2,1,'2021-03-09 23:06:04','2021-03-09 23:29:50','2021-03-09 23:29:50');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suscripciones`
--

DROP TABLE IF EXISTS `suscripciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `suscripciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `precio` decimal(12,2) NOT NULL,
  `detalle` varchar(200) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suscripciones`
--

LOCK TABLES `suscripciones` WRITE;
/*!40000 ALTER TABLE `suscripciones` DISABLE KEYS */;
INSERT INTO `suscripciones` VALUES (1,'',150585.00,'jdashjdashjdfn ','2021-03-06 16:13:22','2021-03-11 23:57:34','2021-03-11 23:57:34'),(2,'',123.00,'este es un plan basico','2021-03-11 23:14:45','2021-03-11 23:14:45',NULL),(3,'basico',123.00,'Esta es una nueva suscripcion','2021-03-11 23:23:06','2021-03-11 23:23:06',NULL),(4,'EMI',123456.00,'puro vino','2021-03-11 23:24:46','2021-03-11 23:24:46',NULL),(5,'EMI',4565465.00,'mas vino','2021-03-11 23:27:15','2021-03-11 23:27:15',NULL),(6,'EMI',45648.00,'mas vino','2021-03-11 23:28:42','2021-03-11 23:28:42',NULL),(7,'ALBERT',987.00,'va de nuevo','2021-03-11 23:30:01','2021-03-11 23:56:38',NULL);
/*!40000 ALTER TABLE `suscripciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Noelia','Carosella','undefined-1615503515669.jpg','noe.carosella@gmail.com','$2a$12$j7QmkfuwBC18Lzg8ImrLF.lAqqrWXazaRcTkIFiA.MBJzqdh.0oJm','2021-03-11','Elm Street 654','capital federal','Ciudad Autónoma de Buenos Aires','2021-03-10 00:21:15',NULL,'2021-03-11 22:58:35'),(2,'Sirius','Perrito','undefined-1615335789431.jpg','siri@gmail.com','$2a$12$hhJIsNnEF6Rl8Sf9c/8u.ufnbS7EsMjxwvH8Ny4/J2OOMvtnnf9jS','2020-12-28','Siempreviva 123','capital federal','Ciudad Autónoma de Buenos Aires','2021-03-10 00:23:09',NULL,'2021-03-10 00:23:09'),(3,'Otro','Sirius','undefined-1615335918092.jpg','otroSirius@gmail.com','$2a$12$6n.9sEsJe/GzPNqoRTTUYuO4QTU1w0CPr79yfJRnDqHWajSHLyrl6','2020-12-28','Siempreviva 123','capital federal','Ciudad Autónoma de Buenos Aires','2021-03-10 00:25:18',NULL,'2021-03-10 00:25:18'),(4,'Alberto Eduardo ','Simonetti','undefined-1615663078670.jpg','albert@gmail.com','$2a$12$28KgQjNUZJ7JEb8t72sGD.EStm7FONLJsPDHkBuKRcI3RtZ/BVNRq','1967-01-29','Pareja 3578','Ciudad Autónoma de Buenos Aires ','Buenos Aires','2021-03-13 19:15:54',NULL,'2021-03-13 19:17:58');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_productos`
--

DROP TABLE IF EXISTS `ventas_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_producto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_productos`
--

LOCK TABLES `ventas_productos` WRITE;
/*!40000 ALTER TABLE `ventas_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_suscripciones`
--

DROP TABLE IF EXISTS `ventas_suscripciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas_suscripciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_suscripcion` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_suscripciones`
--

LOCK TABLES `ventas_suscripciones` WRITE;
/*!40000 ALTER TABLE `ventas_suscripciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas_suscripciones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-13 18:07:18
