show databases;

use db2;

Create table xxclient (
id          		int primary key auto_increment,
first_name  		varchar(50),
last_name			varchar(50),
user_name			varchar(50),
email 				varchar(50) not null,
pwd					varchar(30) not null,
Address_line1		varchar(240),
Address_line2		varchar(240),
Address_line3		varchar(240),
contact_number		varchar(20),
city				varchar(120),
state				varchar(120),
country				varchar(120)
);

desc xxclient;

create table xxmeeting (
Meeting_id			int primary key auto_increment,
Title				varchar(100) not null,
Date				date not null,
Duration			int,
Meeting_password	varchar(30),
Location			varchar(30)
);

desc xxmeeting;
