USE [master]
GO
CREATE LOGIN [PF-GestionAutos] WITH PASSWORD=N'Personajes', DEFAULT_DATABASE=[PF-GestionAutos], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO

USE [PF-GestionAutos]
GO
CREATE USER [PF-GestionAutos] FOR LOGIN [PF-GestionAutos]
GO
USE [PF-GestionAutos]
GO
ALTER ROLE [db_owner] ADD MEMBER [PF-GestionAutos]
GO