-- Create a new database called 'GameCenter'
-- Connect to the 'master' database to run this snippet
USE GameCenter
GO
-- Create the new database if it does not exist already

CREATE DATABASE GameCenter
GO




GO
--THIS TABLE IS FOR ADMINISTRATOR authentication
CREATE TABLE Users(
    Id int IDENTITY(1,1) not null PRIMARY key,
    password varchar(10) not null,
    name VARCHAR(20) not NULL
);

GO
go
--THIS TABLE IS FOR authentication OF CUSTOMERS
CREATE table Customers(
    Id int IDENTITY(1,1) not null Primary KEY,
    name varchar(20) not null,
    phone varchar(20)
);
go
GO
CREATE TABLE Devices(
    Id int identity(1,1) not null PRIMARY KEY,
    name varchar(40) not null,
    In_Nice_Condition bit not NULL
);
GO
GO
CREATE TABLE PlayingSpaces(
    Id int IDENTITY(1,1) not null PRIMARY KEY,
    IsEmpty BIT not null,
    Gaming_DeviceId int not null,
    CONSTRAINT DeviceFK FOREIGN KEY (Gaming_DeviceId) REFERENCES Devices(Id)

);
go
GO
CREATE table Orders(
    Id int identity(1,1) not null PRIMARY KEY,
    date DATETIME not null,
    Current_CustomerId int not null,
    Ordered_DeviceId int not null,
    AdminId int not null,
    CONSTRAINT CustomerFK FOREIGN KEY (Current_CustomerId) REFERENCES Customers(Id),
    Constraint Ordered_DeviceFK FOREIGN KEY (Ordered_DeviceId) REFERENCES Devices(Id),
    CONSTRAINT UserFK FOREIGN KEY (AdminId) REFERENCES Users(Id)
);
go

GO
insert into Customers(name,phone) values
('Юра','3729000000'),
('Даник','37529100002'),
('Коля','37529100000'),
('Илья','37529100330'),
('Владик','37529200000');
GO
insert into Users(name,password) values
 ('Андрей','11111111'),
 ('Юра','12345678'),
 ('Даник','22222222'),
 ('Коля','33333333'),
 ('Влад','44444444');
GO
insert into Devices(name,In_Nice_Condition) values ('Playstation 4 Pro',1),
('Nintendo Switch',1),
('Xbox One X',1),
('Nintendo Wii',0),
('Nintendo Switch',1),
('Xbox One X',1);
GO
insert into PlayingSpaces(IsEmpty,Gaming_DeviceId) values 
(1,1),
(1,3),
(1,2),
(0,4),
(0,5);
GO
insert into Orders(date,Current_CustomerId,Ordered_DeviceId,AdminId) values 
('10-10-2020 10:30',1,1,1),
('10-10-2020 10:35',2,2,1),
('10-10-2020 10:40',3,4,1),
('10-10-2020 11:00',4,3,1);

SELECT  *
  FROM [GameCenter].[dbo].[Users] where name='Юра' and password='12345678'
 