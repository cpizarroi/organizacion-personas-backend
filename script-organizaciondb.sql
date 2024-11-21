-- Crear la base de datos si no existe y usarla
CREATE DATABASE IF NOT EXISTS organizaciondb CHARACTER SET utf8 COLLATE utf8_general_ci;
USE organizaciondb;

-- Eliminar las tablas si ya existen para evitar errores de duplicación
DROP TABLE IF EXISTS personas;
DROP TABLE IF EXISTS areas;

-- Crear tabla areas
CREATE TABLE areas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Crear tabla personas
CREATE TABLE personas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    area_id INT,
    CONSTRAINT fk_persona_area FOREIGN KEY (area_id) REFERENCES areas(id) ON DELETE SET NULL ON UPDATE CASCADE
);

-- Insertar datos en la tabla areas
INSERT INTO areas (id, nombre) VALUES 
    ('Recursos Humanos'),
    ('Administración'),
    ('Área de Desarrollo'),
    ('Finanzas'),
    ('Marketing');

-- Insertar datos en la tabla personas
INSERT INTO personas (id, nombre, correo, area_id) VALUES
    ('Juan Pérez', 'juan@example.com', 2),
    ('Camila Pizarro', 'c.pizarroibaceta@gmail.com', 1),
    ('Carola Carrasco', 'carola.carrasco@gmail.com', 5),
    ('Diego Meneses', 'diego.meneses@gmail.com', 4),
    ('Paula Andrades', 'paula.andrades@gmail.com', 6);
