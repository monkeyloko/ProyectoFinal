USE [master]
GO
CREATE LOGIN [GestionAutos] WITH PASSWORD=N'GestionAutos', DEFAULT_DATABASE=[PF-GestionAutos], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO

USE [PF-GestionAutos]
GO
CREATE USER [GestionAutos] FOR LOGIN [GestionAutos]
GO
USE [PF-GestionAutos]
GO
ALTER ROLE [db_owner] ADD MEMBER [GestionAutos]
GO