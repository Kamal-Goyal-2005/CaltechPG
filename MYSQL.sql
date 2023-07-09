create table xxdemostudent(sid int,sname varchar(20),gender char, dob date);

desc xxdemostudent;

drop table xxdemostudent;

show databases;

use saas_finance_dev;


Create table xxclient (
id          		int,
first_name  		varchar(240),
last_name			varchar(240),
user_name			varchar(240),
email 				varchar(50),
pwd					varchar(30),
Address_line1		varchar(240),
Address_line2		varchar(240),
Address_line3		varchar(240),
contact_number		varchar(20),
city				varchar(240),
state				varchar(240),
country				varchar(240),
created_by			int,
creation_date		date,
last_update_by		int,
last_update_date	date
);
desc xxclient;

drop table xxclient;

drop table xxmeeting;

create table xxmeeting (
Meeting_id			int,
Title				varchar(100),
Date				date,
Duration			int,
Meeting_password	varchar(30),
Location			varchar(30),
created_by			int,
creation_date		date,
last_update_by		int,
last_update_date	date
);

desc xxmeeting;