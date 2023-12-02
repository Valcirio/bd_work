CREATE DATABASE Fiesta;

USE Fiesta;

CREATE TABLE Evento(
	ID_Evento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome_Ev VARCHAR(45),
    Local_Ev VARCHAR(200),
    Data_Init DATETIME,
    Data_End DATETIME,
    Valor FLOAT,
    Num_Convidados INT
);

CREATE TABLE Anfitriao(
	ID_Anfitriao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(45),
    Evento_Criado INT,
    FOREIGN KEY (Evento_Criado) REFERENCES Evento(ID_Evento)
);

CREATE TABLE Convidado(
	ID_Convidado INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(45),
    Idade INT(3),
	Evento_Convidado INT,
    FOREIGN KEY (Evento_Convidado) REFERENCES Evento(ID_Evento)
);