-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 23-06-2014 a las 03:44:54
-- Versión del servidor: 5.5.9
-- Versión de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Base de datos: `consulta_puntos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntos`
--

CREATE TABLE `puntos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `lat` decimal(20,15) NOT NULL,
  `lon` decimal(20,15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=6 ;

--
-- Volcar la base de datos para la tabla `puntos`
--

INSERT INTO `puntos` VALUES(1, 'Testing 1', 'Av. Testing 1', 17.051861221966202, -96.730413436889650);
INSERT INTO `puntos` VALUES(2, 'Testing 2', 'Av. Testing 1', 17.064415604779377, -96.721658706665040);
INSERT INTO `puntos` VALUES(3, 'Testing 3', 'Av. Testing 3', 17.064251500645423, -96.719942092895510);
INSERT INTO `puntos` VALUES(4, 'Testing 4', 'Av. Testing 4', 17.060230904297790, -96.720027923583980);
INSERT INTO `puntos` VALUES(5, 'Testing 5', 'Av. Testing 1', 17.054733214058018, -96.714963912963870);