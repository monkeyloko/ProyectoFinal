USE [master]
GO
/****** Object:  Database [PF-GestionAutos]    Script Date: 13/11/2023 12:19:48 ******/
CREATE DATABASE [PF-GestionAutos]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'PF-GestionAutos', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\PF-GestionAutos.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'PF-GestionAutos_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\PF-GestionAutos_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [PF-GestionAutos] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [PF-GestionAutos].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [PF-GestionAutos] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET ARITHABORT OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [PF-GestionAutos] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [PF-GestionAutos] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET  DISABLE_BROKER 
GO
ALTER DATABASE [PF-GestionAutos] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [PF-GestionAutos] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET RECOVERY FULL 
GO
ALTER DATABASE [PF-GestionAutos] SET  MULTI_USER 
GO
ALTER DATABASE [PF-GestionAutos] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [PF-GestionAutos] SET DB_CHAINING OFF 
GO
ALTER DATABASE [PF-GestionAutos] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [PF-GestionAutos] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [PF-GestionAutos] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'PF-GestionAutos', N'ON'
GO
ALTER DATABASE [PF-GestionAutos] SET QUERY_STORE = OFF
GO
USE [PF-GestionAutos]
GO
/****** Object:  User [GestionAutos]    Script Date: 13/11/2023 12:19:48 ******/
CREATE USER [GestionAutos] FOR LOGIN [GestionAutos] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 13/11/2023 12:19:48 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [GestionAutos]
GO
/****** Object:  Table [dbo].[Auto]    Script Date: 13/11/2023 12:19:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Auto](
	[idAuto] [int] IDENTITY(1,1) NOT NULL,
	[patente] [nchar](10) NULL,
	[fkUbicacion] [int] NULL,
	[disponibilidad] [nchar](50) NULL,
	[modelo] [nchar](50) NULL,
	[limpio] [bit] NULL,
 CONSTRAINT [PK_Auto] PRIMARY KEY CLUSTERED 
(
	[idAuto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cliente]    Script Date: 13/11/2023 12:19:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cliente](
	[idCliente] [int] IDENTITY(1,1) NOT NULL,
	[nombreCompleto] [nchar](100) NULL,
	[dni] [int] NULL,
	[telefono] [nchar](10) NULL,
 CONSTRAINT [PK_Cliente] PRIMARY KEY CLUSTERED 
(
	[idCliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Contrato]    Script Date: 13/11/2023 12:19:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contrato](
	[idContrato] [int] IDENTITY(1,1) NOT NULL,
	[precio] [float] NULL,
	[fechaAlquilado] [date] NULL,
	[fechaDevolucion] [date] NULL,
	[fkCliente] [int] NULL,
	[fkAuto] [int] NULL,
	[id_dañoEntrega] [int] NULL,
	[id_dañoDevolucion] [int] NULL,
	[ubicacionEntrega] [int] NULL,
	[ubicacionDevolucion] [int] NULL,
 CONSTRAINT [PK_Contrato] PRIMARY KEY CLUSTERED 
(
	[idContrato] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Daños]    Script Date: 13/11/2023 12:19:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Daños](
	[idDaños] [int] IDENTITY(1,1) NOT NULL,
	[fotoActual] [nchar](800) NULL,
	[fecha] [date] NULL,
	[fkAuto] [int] NULL,
	[descripcion] [nchar](800) NULL,
 CONSTRAINT [PK_Daños] PRIMARY KEY CLUSTERED 
(
	[idDaños] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reparacion]    Script Date: 13/11/2023 12:19:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reparacion](
	[idReparacion] [int] IDENTITY(1,1) NOT NULL,
	[fkEstadoReparacionAntes] [int] NULL,
	[fkEstadoReparacionDespues] [int] NULL,
	[fecha] [date] NULL,
	[descripcion] [nchar](100) NULL,
 CONSTRAINT [PK_Reparacion] PRIMARY KEY CLUSTERED 
(
	[idReparacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Ubicacion]    Script Date: 13/11/2023 12:19:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ubicacion](
	[nombre] [nchar](50) NULL,
	[direccion] [nchar](50) NULL,
	[idUbicacion] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_Ubicacion] PRIMARY KEY CLUSTERED 
(
	[idUbicacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Auto] ON 

INSERT [dbo].[Auto] ([idAuto], [patente], [fkUbicacion], [disponibilidad], [modelo], [limpio]) VALUES (1, N'AD708KV   ', 1, N'Esta disponible                                   ', N'KWID                                              ', 1)
INSERT [dbo].[Auto] ([idAuto], [patente], [fkUbicacion], [disponibilidad], [modelo], [limpio]) VALUES (2, N'AE667EP   ', 2, N'Esta Alquilado                                    ', N'ETIOS                                             ', 1)
INSERT [dbo].[Auto] ([idAuto], [patente], [fkUbicacion], [disponibilidad], [modelo], [limpio]) VALUES (3, N'AE667EQ   ', 1, N'No disponible                                     ', N'LOGAN                                             ', 0)
INSERT [dbo].[Auto] ([idAuto], [patente], [fkUbicacion], [disponibilidad], [modelo], [limpio]) VALUES (4, N'AD708KU   ', 1, N'No disponible                                     ', N'LOGAN                                             ', 1)
INSERT [dbo].[Auto] ([idAuto], [patente], [fkUbicacion], [disponibilidad], [modelo], [limpio]) VALUES (5, N'AG300XX   ', 1, N'Esta disponible                                   ', N'Tesla x                                           ', 1)
INSERT [dbo].[Auto] ([idAuto], [patente], [fkUbicacion], [disponibilidad], [modelo], [limpio]) VALUES (6, N'sassa     ', 2, N'Esta disponible                                   ', N'Tesla xxx                                         ', 1)
INSERT [dbo].[Auto] ([idAuto], [patente], [fkUbicacion], [disponibilidad], [modelo], [limpio]) VALUES (23, N'99        ', 1, N'Esta disponible                                   ', N'KWID                                              ', 1)
INSERT [dbo].[Auto] ([idAuto], [patente], [fkUbicacion], [disponibilidad], [modelo], [limpio]) VALUES (24, N'AB504GE   ', 1, N'Esta disponible                                   ', N'Tesla x                                           ', 1)
SET IDENTITY_INSERT [dbo].[Auto] OFF
GO
SET IDENTITY_INSERT [dbo].[Cliente] ON 

INSERT [dbo].[Cliente] ([idCliente], [nombreCompleto], [dni], [telefono]) VALUES (1, N'Santiago Doff                                                                                       ', 46873259, N'1126557030')
INSERT [dbo].[Cliente] ([idCliente], [nombreCompleto], [dni], [telefono]) VALUES (2, N'Profe Uri                                                                                           ', 1234567, N'1177742010')
INSERT [dbo].[Cliente] ([idCliente], [nombreCompleto], [dni], [telefono]) VALUES (4, N'Profe Lean                                                                                          ', 10, N'1154832291')
SET IDENTITY_INSERT [dbo].[Cliente] OFF
GO
SET IDENTITY_INSERT [dbo].[Contrato] ON 

INSERT [dbo].[Contrato] ([idContrato], [precio], [fechaAlquilado], [fechaDevolucion], [fkCliente], [fkAuto], [id_dañoEntrega], [id_dañoDevolucion], [ubicacionEntrega], [ubicacionDevolucion]) VALUES (1, 10, CAST(N'2023-08-28' AS Date), CAST(N'2023-08-31' AS Date), 1, 1, 1, 2, 2, 2)
INSERT [dbo].[Contrato] ([idContrato], [precio], [fechaAlquilado], [fechaDevolucion], [fkCliente], [fkAuto], [id_dañoEntrega], [id_dañoDevolucion], [ubicacionEntrega], [ubicacionDevolucion]) VALUES (3, 1, CAST(N'2023-08-28' AS Date), CAST(N'2023-08-31' AS Date), 1, 1, 1, 1, 2, 2)
INSERT [dbo].[Contrato] ([idContrato], [precio], [fechaAlquilado], [fechaDevolucion], [fkCliente], [fkAuto], [id_dañoEntrega], [id_dañoDevolucion], [ubicacionEntrega], [ubicacionDevolucion]) VALUES (5, 1, CAST(N'2023-08-30' AS Date), CAST(N'2023-08-31' AS Date), 1, 1, 0, 0, 1, 1)
INSERT [dbo].[Contrato] ([idContrato], [precio], [fechaAlquilado], [fechaDevolucion], [fkCliente], [fkAuto], [id_dañoEntrega], [id_dañoDevolucion], [ubicacionEntrega], [ubicacionDevolucion]) VALUES (6, 69, CAST(N'2023-08-22' AS Date), CAST(N'2023-08-30' AS Date), 1, 4, NULL, NULL, 1, 2)
INSERT [dbo].[Contrato] ([idContrato], [precio], [fechaAlquilado], [fechaDevolucion], [fkCliente], [fkAuto], [id_dañoEntrega], [id_dañoDevolucion], [ubicacionEntrega], [ubicacionDevolucion]) VALUES (7, 999, CAST(N'2023-11-13' AS Date), CAST(N'2023-11-22' AS Date), 1, 1, 1, NULL, 1, 1)
INSERT [dbo].[Contrato] ([idContrato], [precio], [fechaAlquilado], [fechaDevolucion], [fkCliente], [fkAuto], [id_dañoEntrega], [id_dañoDevolucion], [ubicacionEntrega], [ubicacionDevolucion]) VALUES (8, 1, CAST(N'2023-11-13' AS Date), CAST(N'2023-11-20' AS Date), 2, 24, 6, NULL, 1, 1)
SET IDENTITY_INSERT [dbo].[Contrato] OFF
GO
SET IDENTITY_INSERT [dbo].[Daños] ON 

INSERT [dbo].[Daños] ([idDaños], [fotoActual], [fecha], [fkAuto], [descripcion]) VALUES (1, N'no                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ', CAST(N'2005-09-10' AS Date), 1, N'esta bien                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ')
INSERT [dbo].[Daños] ([idDaños], [fotoActual], [fecha], [fkAuto], [descripcion]) VALUES (2, N'null                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ', NULL, NULL, NULL)
INSERT [dbo].[Daños] ([idDaños], [fotoActual], [fecha], [fkAuto], [descripcion]) VALUES (3, N'no                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ', CAST(N'2023-08-28' AS Date), 4, N'esta bien                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ')
INSERT [dbo].[Daños] ([idDaños], [fotoActual], [fecha], [fkAuto], [descripcion]) VALUES (4, N'null                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ', NULL, 4, NULL)
INSERT [dbo].[Daños] ([idDaños], [fotoActual], [fecha], [fkAuto], [descripcion]) VALUES (5, N'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', CAST(N'2005-09-10' AS Date), 23, N'auto recien creado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ')
INSERT [dbo].[Daños] ([idDaños], [fotoActual], [fecha], [fkAuto], [descripcion]) VALUES (6, N'foto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ', CAST(N'2005-09-10' AS Date), 24, N'auto recien creado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ')
SET IDENTITY_INSERT [dbo].[Daños] OFF
GO
SET IDENTITY_INSERT [dbo].[Ubicacion] ON 

INSERT [dbo].[Ubicacion] ([nombre], [direccion], [idUbicacion]) VALUES (N'Chalten                                           ', N'Chalten 111                                       ', 1)
INSERT [dbo].[Ubicacion] ([nombre], [direccion], [idUbicacion]) VALUES (N'Galpon                                            ', N'en algun lugar                                    ', 2)
INSERT [dbo].[Ubicacion] ([nombre], [direccion], [idUbicacion]) VALUES (N'Aeropuerto                                        ', N'nose                                              ', 3)
SET IDENTITY_INSERT [dbo].[Ubicacion] OFF
GO
ALTER TABLE [dbo].[Auto]  WITH CHECK ADD  CONSTRAINT [FK_Auto_Ubicacion] FOREIGN KEY([fkUbicacion])
REFERENCES [dbo].[Ubicacion] ([idUbicacion])
GO
ALTER TABLE [dbo].[Auto] CHECK CONSTRAINT [FK_Auto_Ubicacion]
GO
ALTER TABLE [dbo].[Contrato]  WITH CHECK ADD  CONSTRAINT [FK_Contrato_Auto] FOREIGN KEY([fkAuto])
REFERENCES [dbo].[Auto] ([idAuto])
GO
ALTER TABLE [dbo].[Contrato] CHECK CONSTRAINT [FK_Contrato_Auto]
GO
ALTER TABLE [dbo].[Contrato]  WITH CHECK ADD  CONSTRAINT [FK_Contrato_Cliente] FOREIGN KEY([fkCliente])
REFERENCES [dbo].[Cliente] ([idCliente])
GO
ALTER TABLE [dbo].[Contrato] CHECK CONSTRAINT [FK_Contrato_Cliente]
GO
ALTER TABLE [dbo].[Contrato]  WITH NOCHECK ADD  CONSTRAINT [FK_Contrato_Daños] FOREIGN KEY([id_dañoDevolucion])
REFERENCES [dbo].[Daños] ([idDaños])
GO
ALTER TABLE [dbo].[Contrato] CHECK CONSTRAINT [FK_Contrato_Daños]
GO
ALTER TABLE [dbo].[Contrato]  WITH NOCHECK ADD  CONSTRAINT [FK_Contrato_Daños1] FOREIGN KEY([id_dañoEntrega])
REFERENCES [dbo].[Daños] ([idDaños])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Contrato] CHECK CONSTRAINT [FK_Contrato_Daños1]
GO
ALTER TABLE [dbo].[Contrato]  WITH CHECK ADD  CONSTRAINT [FK_Contrato_Ubicacion] FOREIGN KEY([ubicacionEntrega])
REFERENCES [dbo].[Ubicacion] ([idUbicacion])
GO
ALTER TABLE [dbo].[Contrato] CHECK CONSTRAINT [FK_Contrato_Ubicacion]
GO
ALTER TABLE [dbo].[Contrato]  WITH CHECK ADD  CONSTRAINT [FK_Contrato_Ubicacion1] FOREIGN KEY([ubicacionDevolucion])
REFERENCES [dbo].[Ubicacion] ([idUbicacion])
GO
ALTER TABLE [dbo].[Contrato] CHECK CONSTRAINT [FK_Contrato_Ubicacion1]
GO
ALTER TABLE [dbo].[Daños]  WITH CHECK ADD  CONSTRAINT [FK_Daños_Auto] FOREIGN KEY([fkAuto])
REFERENCES [dbo].[Auto] ([idAuto])
GO
ALTER TABLE [dbo].[Daños] CHECK CONSTRAINT [FK_Daños_Auto]
GO
ALTER TABLE [dbo].[Reparacion]  WITH CHECK ADD  CONSTRAINT [FK_Reparacion_Daños] FOREIGN KEY([fkEstadoReparacionAntes])
REFERENCES [dbo].[Daños] ([idDaños])
GO
ALTER TABLE [dbo].[Reparacion] CHECK CONSTRAINT [FK_Reparacion_Daños]
GO
ALTER TABLE [dbo].[Reparacion]  WITH CHECK ADD  CONSTRAINT [FK_Reparacion_Daños1] FOREIGN KEY([fkEstadoReparacionDespues])
REFERENCES [dbo].[Daños] ([idDaños])
GO
ALTER TABLE [dbo].[Reparacion] CHECK CONSTRAINT [FK_Reparacion_Daños1]
GO
USE [master]
GO
ALTER DATABASE [PF-GestionAutos] SET  READ_WRITE 
GO
