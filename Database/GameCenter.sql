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
    UserId int IDENTITY(1,1) not null PRIMARY key,
    User_Password varchar(10) not null,
    User_Name VARCHAR(20) not NULL
);

GO
go
--THIS TABLE IS FOR authentication OF CUSTOMERS
CREATE table Customers(
    CustomerId int IDENTITY(1,1) not null Primary KEY,
    Customer_Name varchar(20) not null,
    Customer_Phone varchar(20)
);
go
GO
CREATE TABLE Devices(
    DeviceId int identity(1,1) not null PRIMARY KEY,
    Device_Name varchar(40) not null,
    In_Nice_Condition bit not NULL
);
GO
GO
CREATE TABLE PlayingSpaces(
    PlayingSpaceId int IDENTITY(1,1) not null PRIMARY KEY,
    IsEmpty BIT not null,
    Gaming_DeviceId int not null,
    CONSTRAINT DeviceFK FOREIGN KEY (Gaming_DeviceId) REFERENCES Devices(DeviceId)

);
go
GO
CREATE table Orders(
    OrderId int identity(1,1) not null PRIMARY KEY,
    Order_Date DATETIME not null,
    Current_CustomerId int not null,
    Ordered_DeviceId int not null,
    AdminId int not null,
    CONSTRAINT CustomerFK FOREIGN KEY (Current_CustomerId) REFERENCES Customers(CustomerId),
    Constraint Ordered_DeviceFK FOREIGN KEY (Ordered_DeviceId) REFERENCES Devices(DeviceId),
    CONSTRAINT UserFK FOREIGN KEY (AdminId) REFERENCES Users(UserId)
);
go

GO
insert into Customers(Customer_Name,Customer_Phone) values
('Юра','+3729000000'),
('Даник',''),
('Коля','+37529100000'),
('Илья',''),
('Владик','+37529200000');
GO
insert into Users(User_Name,User_Password) values
 ('Андрей','11111111'),
 ('Юра','12345678'),
 ('Даник','22222222'),
 ('Коля','33333333'),
 ('Влад','44444444');
GO
insert into Devices(Device_Name,In_Nice_Condition) values ('Playstation 4 Pro',1),
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
insert into Orders(Order_Date,Current_CustomerId,Ordered_DeviceId,AdminId) values 
('10-10-2020 10:30',1,1,1),
('10-10-2020 10:35',2,2,1),
('10-10-2020 10:40',3,4,1),
('10-10-2020 11:00',4,3,1);

SELECT  *
  FROM [GameCenter].[dbo].[Users] where User_Name='Юра' and User_Password='12345678'