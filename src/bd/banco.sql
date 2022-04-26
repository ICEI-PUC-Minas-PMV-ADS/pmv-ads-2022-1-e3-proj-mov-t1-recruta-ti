CREATE DATABASE `recrutati`;

USE `recrutati`;

CREATE TABLE `Recrutador` (
    `CodRec` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `NomeRec` varchar(50) NOT NULL,
    `Email` varchar(50) UNIQUE NOT NULL,
    `Senha` varchar(50) NOT NULL,
);

CREATE TABLE `Usuario` (
    `CodUsuario` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `NomeUsuario` varchar(30) NOT NULL,
    `Email` varchar(50) UNIQUE NOT NULL,
    `Senha` varchar(50) NOT NULL,
    `Telefone` varchar(15),
    `Disponibilidade` int(11),
    `LinkedIn` varchar(50),
    `Github` varchar(50),
    `Descricao` varchar(50),
    `Senha` varchar(50) NOT NULL,
);

CREATE TABLE `Projetos` (
    `CodProjeto` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `NomeProj` varchar(50) NOT NULL,
    `Data` datetime(6),
    `CodLinguagem` int(11),
    `CodUsuario` int(11) NOT NULL,
);

CREATE TABLE `Certificados` (
    `CodCertificado` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `NomeCertificado` varchar(50) NOT NULL,
    `Data` datetime(6),
    `Descricao` varchar(50),
    `CodLinguagem` int(11),
    `CodUsuario` int(11) NOT NULL,
);

CREATE TABLE `Mensagens` (
    `CodMensagem` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `CodRec` int(11) NOT NULL,
    `CodUsuario` int(11) NOT NULL,
    `Assunto` varchar(100),
    `Mensagem` varchar(1000),
);

CREATE TABLE `Linguagens` (
    `CodLinguagem` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `NomeLinguagem` varchar(50) UNIQUE NOT NULL,
);

CREATE TABLE `LinguagensUsuarios` (
    `CodLinguagem` int(11) NOT NULL,
    `CodUsuario` int(11) NOT NULL,
    `Proficiencia` varchar(50),
);

CREATE TABLE `Idiomas` (
    `CodIdioma` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `NomeIdioma` varchar(50) UNIQUE NOT NULL,
);

CREATE TABLE `IdiomasUsuarios` (
    `CodUsuario` int(11) NOT NULL,
    `CodIdioma` int(11) NOT NULL,
    `Proficiencia` varchar(50),
);

ALTER TABLE `Projetos`
    ADD CONSTRAINT `FK_Projetos_Usuario_CodUsuario` FOREIGN KEY (`CodUsuario`) REFERENCES `Usuario` (`CodUsuario`),
    ADD CONSTRAINT `FK_Projetos_Linguagens_CodLinguagem` FOREIGN KEY (`CodLinguagem`) REFERENCES `Linguagens` (`CodLinguagem`);

ALTER TABLE `Certificados`
    ADD CONSTRAINT `FK_Certificados_Usuario_CodUsuario` FOREIGN KEY (`CodUsuario`) REFERENCES `Usuario` (`CodUsuario`),
    ADD CONSTRAINT `FK_Certificados_Linguagens_CodLinguagem` FOREIGN KEY (`CodLinguagem`) REFERENCES `Linguagens` (`CodLinguagem`);

ALTER TABLE `Mensagens`
    ADD CONSTRAINT `FK_Mensagens_Usuario_CodUsuario` FOREIGN KEY (`CodUsuario`) REFERENCES `Usuario` (`CodUsuario`),
    ADD CONSTRAINT `FK_Mensagens_Recrutador_CodRec` FOREIGN KEY (`CodRec`) REFERENCES `Recrutador` (`CodRec`);

ALTER TABLE `LinguagensUsuarios`
    ADD CONSTRAINT `FK_LinguagensUsuarios_Usuario_CodUsuario` FOREIGN KEY (`CodUsuario`) REFERENCES `Usuario` (`CodUsuario`),
    ADD CONSTRAINT `FK_LinguagensUsuarios_Linguagens_CodLinguagem` FOREIGN KEY (`CodLinguagem`) REFERENCES `Linguagens` (`CodLinguagem`);

ALTER TABLE `IdiomasUsuarios`
    ADD CONSTRAINT `FK_IdiomasUsuarios_Usuario_CodUsuario` FOREIGN KEY (`CodUsuario`) REFERENCES `Usuario` (`CodUsuario`),
    ADD CONSTRAINT `FK_IdiomasUsuarios_Idiomas_CodIdioma` FOREIGN KEY (`CodIdioma`) REFERENCES `Idiomas` (`CodIdioma`);
