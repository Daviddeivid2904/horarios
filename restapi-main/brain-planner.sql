-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-11-2022 a las 02:23:31
-- Versión del servidor: 8.0.17
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `brain-planner`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `id_curso` int(11) NOT NULL,
  `nombre_curso` varchar(255) NOT NULL,
  `materias_necesarias` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`id_curso`, `nombre_curso`, `materias_necesarias`) VALUES
(5, '3RD', 0),
(6, '3C', 0),
(7, '3H', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso_materia`
--

CREATE TABLE `curso_materia` (
  `id_materia` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL,
  `dia` varchar(100) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `horas_por_semana` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `curso_materia`
--

INSERT INTO `curso_materia` (`id_materia`, `id`, `id_curso`, `dia`, `id_profesor`, `horas_por_semana`) VALUES
(0, 1, 0, '', 0, 3),
(0, 2, 0, '', 0, 3),
(0, 3, 0, '', 0, 5),
(0, 4, 0, '', 0, 1),
(0, 5, 0, '', 0, 4),
(0, 6, 0, 'martes', 34, 0),
(0, 7, 0, 'martes', 35, 0),
(0, 8, 0, 'lunes', 36, 0),
(0, 9, 0, 'martes', 36, 0),
(0, 10, 0, 'miercoles', 36, 0),
(0, 11, 0, 'jueves', 36, 0),
(0, 12, 0, 'viernes', 36, 0),
(0, 13, 0, 'lunes', 37, 0),
(0, 14, 0, 'lunes', 37, 0),
(0, 15, 0, 'lunes', 37, 0),
(0, 16, 0, 'lunes', 37, 0),
(0, 17, 0, 'lunes', 37, 0),
(0, 18, 0, 'martes', 37, 0),
(0, 19, 0, 'martes', 37, 0),
(0, 20, 0, 'martes', 37, 0),
(0, 21, 0, 'miercoles', 37, 0),
(0, 22, 0, 'jueves', 37, 0),
(0, 23, 0, 'viernes', 37, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso_profesor`
--

CREATE TABLE `curso_profesor` (
  `id` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `disponibilidad_horaria`
--

CREATE TABLE `disponibilidad_horaria` (
  `dia` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `bloque` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `disponibilidad_horaria`
--

INSERT INTO `disponibilidad_horaria` (`dia`, `id_profesor`, `bloque`) VALUES
(0, 31, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `id_materia` int(11) NOT NULL,
  `continuidad` tinyint(1) NOT NULL,
  `nombre_materia` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`id_materia`, `continuidad`, `nombre_materia`) VALUES
(18, 127, 'Ingles'),
(35, 1, 'Matematica'),
(36, 1, 'Proyecto'),
(37, 1, 'Lengua');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `id_profesor` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`id_profesor`, `nombre`, `apellido`) VALUES
(2, 'David', 'Segundo'),
(3, 'Delfina', 'Brunstein'),
(4, 'Lucas', 'Cancela'),
(31, 'Victoria', 'Gramuglia'),
(32, 'davii', 'davo'),
(33, 'David', 'Segundo'),
(34, 'David', 'Tercero'),
(35, 'David', 'Cuarto'),
(37, 'Ramiro ', 'Argente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor_materia`
--

CREATE TABLE `profesor_materia` (
  `id` int(11) NOT NULL,
  `id_materia` varchar(45) NOT NULL,
  `id_profesor` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `profesor_materia`
--

INSERT INTO `profesor_materia` (`id`, `id_materia`, `id_profesor`) VALUES
(1, '4', '27'),
(2, '4', '28'),
(3, '4', '29'),
(4, '4', '30'),
(5, '4', '31'),
(6, '2', '33'),
(7, '5', '34'),
(8, '7', '35'),
(9, '', '36'),
(10, '16', '37');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id_curso`);

--
-- Indices de la tabla `curso_materia`
--
ALTER TABLE `curso_materia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `curso_profesor`
--
ALTER TABLE `curso_profesor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `disponibilidad_horaria`
--
ALTER TABLE `disponibilidad_horaria`
  ADD PRIMARY KEY (`dia`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`id_materia`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`id_profesor`);

--
-- Indices de la tabla `profesor_materia`
--
ALTER TABLE `profesor_materia`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `curso`
--
ALTER TABLE `curso`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `curso_materia`
--
ALTER TABLE `curso_materia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `curso_profesor`
--
ALTER TABLE `curso_profesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `id_materia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `id_profesor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `profesor_materia`
--
ALTER TABLE `profesor_materia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
