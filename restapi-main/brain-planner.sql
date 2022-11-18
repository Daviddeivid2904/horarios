-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 16-08-2022 a las 18:07:56
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
  `materias_necesarias` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso-materia`
--

CREATE TABLE `curso-materia` (
  `id_materia` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL,
  `dia` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso-profesor`
--

CREATE TABLE `curso-profesor` (
  `id` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `disponibilidad_horaria`
--

CREATE TABLE `disponibilidad_horaria` (
  `dia` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `bloque` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `nombre_materia` varchar(100) NOT NULL,
  `horas_por_semana` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`id_materia`, `continuidad`, `nombre_materia`, `horas_por_semana`) VALUES
(4, 1, 'Matematica', 3),
(5, 0, 'Matematica', 3),
(6, 0, 'Matematica', 0),
(7, 0, 'Lengua', 0),
(8, 0, 'Lengua', 4),
(9, 0, 'Lengua', 0),
(10, 1, 'Ingles', 6),
(11, 127, 'Ingles', 6),
(12, 127, 'Ingles', 6),
(13, 0, 'Ingles', 6),
(14, 0, 'Ingles', 6),
(15, 10, 'Ingles', 6),
(16, 121, 'Ingles', 6),
(17, 127, 'Ingles', 6),
(18, 127, 'Ingles', 12),
(19, 1, 'Matematica', 5),
(20, 1, 'Matematica', 40),
(21, 1, 'Matematica', 1),
(22, 1, 'Matematica', 0),
(23, 1, 'Matematica', 7),
(24, 1, 'Matematica', 5),
(25, 1, 'Matematica', 0),
(26, 1, 'Matematica', 0),
(27, 1, 'Matematica', 0),
(28, 1, 'Matematica', 88),
(29, 1, 'Matematica', 88),
(30, 1, 'Matematica', 0),
(31, 1, 'Matematica', 0),
(32, 1, 'Matematica', 0),
(33, 1, 'Matematica', 0),
(34, 1, 'Matematica', 4),
(35, 1, 'Matematica', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `id_profesor` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`id_profesor`, `nombre`, `apellido`) VALUES
(1, 'Ramiro', 'Bendersky'),
(2, 'David', 'Lekerman'),
(3, 'Delfina', 'Brunstein'),
(4, 'Lucas', 'Cancela'),
(5, 'Pablo', 'Brunstein'),
(6, 'Ramiro', 'Argente'),
(7, 'Sophi', 'Ravel'),
(8, 'Victoria', 'Gramuglia'),
(9, 'Victoria', 'Gramuglia'),
(10, 'Victoria', 'Gramuglia'),
(11, 'Victoria', 'Gramuglia'),
(12, 'Victoria', 'Gramuglia'),
(13, 'Victoria', 'Gramuglia'),
(14, 'Victoria', 'Gramuglia'),
(15, 'Victoria', 'Gramuglia'),
(16, 'Victoria', 'Gramuglia'),
(17, 'Victoria', 'Gramuglia'),
(18, 'Victoria', 'Gramuglia'),
(19, 'Victoria', 'Gramuglia'),
(20, 'Victoria', 'Gramuglia'),
(21, 'Victoria', 'Gramuglia'),
(22, 'Victoria', 'Gramuglia'),
(23, 'Victoria', 'Gramuglia'),
(24, 'Victoria', 'Gramuglia'),
(25, 'Victoria', 'Gramuglia'),
(26, 'Victoria', 'Gramuglia'),
(27, 'Victoria', 'Gramuglia'),
(28, 'Victoria', 'Gramuglia'),
(29, 'Victoria', 'Gramuglia'),
(30, 'Victoria', 'Gramuglia'),
(31, 'Victoria', 'Gramuglia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor_materia`
--

CREATE TABLE `profesor_materia` (
  `id` int(11) NOT NULL,
  `id_materia` varchar(45) NOT NULL,
  `id_profesor` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesor_materia`
--

INSERT INTO `profesor_materia` (`id`, `id_materia`, `id_profesor`) VALUES
(1, '4', '27'),
(2, '4', '28'),
(3, '4', '29'),
(4, '4', '30'),
(5, '4', '31');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id_curso`);

--
-- Indices de la tabla `curso-materia`
--
ALTER TABLE `curso-materia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `curso-profesor`
--
ALTER TABLE `curso-profesor`
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
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `curso-materia`
--
ALTER TABLE `curso-materia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `curso-profesor`
--
ALTER TABLE `curso-profesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `id_materia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `id_profesor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `profesor_materia`
--
ALTER TABLE `profesor_materia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
