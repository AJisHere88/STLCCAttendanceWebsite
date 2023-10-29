USE master
GO

DROP DATABASE AttendanceDB
GO

CREATE DATABASE AttendanceDB
GO

USE AttendanceDB
GO

CREATE TABLE UserType (
		User_Type_ID		INT				NOT NULL	PRIMARY KEY IDENTITY(10,40)
	,	User_Type_Desc	varchar(100)		NOT NULL);

CREATE TABLE Users (
		UserID			INT			NOT NULL	PRIMARY KEY IDENTITY(1000,1)
	,	FirstName		varchar(30)	NOT NULL
	,	LastName		varchar(30)	NOT NULL
	,	Email			varchar(100)NOT NULL
	,	User_Type_ID	INT			NOT NULL	FOREIGN KEY(User_Type_ID) REFERENCES UserType(User_Type_ID)
	,	UserPass		varchar(255)NOT NULL);


CREATE TABLE Course (
		CourseID		INT			NOT NULL	PRIMARY KEY IDENTITY(3000,10)
	,	CourseCode		varchar(10)	NOT NULL
	,	CourseName		varchar(100)	NOT NULL
	,	UserID			INT			NOT NULL	FOREIGN KEY (UserID) REFERENCES Users(UserID)
	,	CourseStartTime	Time(0)		NOT NULL
	,	CourseEndTime	Time(0)		NOT NULL);

CREATE TABLE Enrollment (
		EnrollID		INT			NOT NULL	PRIMARY KEY IDENTITY(600,10)
	,	UserID			INT			NOT NULL	FOREIGN KEY (UserID) REFERENCES Users(UserID)		
	,	CourseID		INT			NOT NULL	FOREIGN KEY (CourseID) REFERENCES Course(CourseID));


CREATE TABLE AccessCode (
		AccessCodeID		INT			NOT NULL	PRIMARY KEY IDENTITY(900,1)
	,	AccessCode			INT			NOT	NULL
	,	CreationTime		Time(0)		NOT NULL
	,	EndTime				Time(0)		NOT NULL
	,	CourseID			INT			NOT NULL	FOREIGN KEY (CourseID) REFERENCES Course(CourseID)
	,	UserID				INT			NOT NULL	FOREIGN KEY (UserID) REFERENCES Users(UserID));



CREATE TABLE Attendance (
		AttendanceID	INT			NOT NULL	PRIMARY KEY IDENTITY(100,10)
	,	Attend			TINYINT		NOT	NULL
	,	AccessCodeID	INT			NOT NULL	FOREIGN KEY (AccessCodeID) REFERENCES AccessCode(AccessCodeID)
	,	EnrollID		INT			NOT NULL	FOREIGN KEY (EnrollID) REFERENCES Enrollment(EnrollID));


INSERT INTO UserType
VALUES
		('Students')
	,	('Instructors')
	,	('Staff');

INSERT INTO Users
VALUES
		('Tim', 'Taylor', 'ttaylor@my.stlcc.com','10', '1111')
	,	('Mary', 'Diaz', 'mdiaz@my.stlcc.com','10', '1111')
	,	('Ryan', 'Woldz', 'rwoldz@my.stlcc.com','10', '1111')
	,	('Sarah', 'Kim', 'skim@my.stlcc.com','10', '1111')
	,	('Andrea', 'Budd', 'abudd@my.stlcc.com','10', '1111')
	,	('Margret', 'Polt', 'mpolt@my.stlcc.com','10', '1111')
	,	('Ryan', 'Gold', 'rgold@my.stlcc.com','10', '1111')
	,	('Craig', 'Higgins', 'chiggins@my.stlcc.com','10', '1111')
	,	('Jaylen', 'Avila', 'javila@my.stlcc.com','10', '1111')
	,	('Lauren', 'Dickerson', 'ldickerson@my.stlcc.com','10', '1111')
	,	('Rey', 'Fisher', 'rfisher@my.stlcc.com','10', '1111')
	,	('Flynn', 'Gallegos', 'fgallegos@my.stlcc.com','10', '1111')
	,	('Arya', 'Curry', 'acurry@my.stlcc.com','10', '1111')
	,	('Ronan', 'Bradley', 'rbradley@my.stlcc.com','10', '1111')
	,	('Annie ', 'Mitchell', 'amitchell@my.stlcc.com','10', '1111')
	,	('Kade', 'Galindo', 'kgalindo@my.stlcc.com','10', '1111')
	,	('Daleyza', 'Chapman', 'dchapman@my.stlcc.com','10', '1111')
	,	('Bowen', 'Sparks', 'bsparks@my.stlcc.com','10', '1111')
	,	('Kimberly', 'Joseph', 'kjoseph@my.stlcc.com','10', '1111')
	,	('Ulises', 'Rasmussen', 'urasmussen@my.stlcc.com','10', '1111')
	,	('Saige', 'Morrison', 'smorrison@my.stlcc.com','10', '1111')
	,	('Osiris', 'Stafford', 'ostafford@my.stlcc.com','10', '1111')
	,	('Aleah', 'Stanley', 'astanley@my.stlcc.com','10', '1111')
	,	('Dominik', 'Lawrence', 'dlawrence@my.stlcc.com','10', '1111')
	,	('Oakleigh', 'Foster', 'ofoster@my.stlcc.com','10', '1111')
	,	('Marco', 'Abbott', 'mabbott@my.stlcc.com','10', '1111')
	,	('Marlowe', 'Huang', 'mhuang@my.stlcc.com','10', '1111')
	,	('Brooks', 'Dennis', 'adennis@my.stlcc.com','10', '1111')
	,	('Amelie', 'Fuentes', 'afuentes@my.stlcc.com','10', '1111')
	,	('Franklin', 'Blackwell', 'fblackwell@my.stlcc.com','10', '1111')
	,	('Amaya', 'Hancock', 'ahancock@stlcc.com','50', '9999')
	,	('Luka', 'Butler', 'lbutler@stlcc.com','50', '9999')
	,	('Maeve', 'Orr', 'morr@stlcc.com','50', '9999')
	,	('Clarissa', 'Villa', 'ahancock@stlcc.com','90', '7777')
	,	('Hayden', 'Xiong', 'hxiong@stlcc.com','90', '7777')
	,	('Jenesis', 'Zimmerman', 'jzimmerman@stlcc.com','90', '7777');

INSERT INTO Course
VALUES
		('IS 112', 'Introduction to Computer Science', '1031','11:00:00','11:50:00')
	,	('IS 280', 'Python', '1031','13:00:00','13:50:00')
	,	('IS 241', 'Systems Analysis and Design', '1031','16:00:00','16:50:00')
	,	('ENG 101', 'College Composition I', '1032','18:00:00','18:50:00')
	,	('ENG 103', 'Report Writing', '1032','08:00:00','08:50:00')
	,	('ENG 102', 'College Composition II', '1032','12:00:00','12:50:00')
	,	('IS 229', 'Unix/Linux I', '1033','07:00:00','07:50:00')
	,	('IS 168', 'GitHub for Developers', '1033','10:00:00','10:50:00')
	,	('IS 101', 'Keyboarding', '1033','15:00:00','15:50:00');

INSERT INTO Enrollment
VALUES
		('1000','3000')
	,	('1001','3000')
	,	('1002','3000')
	,	('1003','3000')
	,	('1004','3000')
	,	('1005','3000')
	,	('1006','3000')
	,	('1007','3000')
	,	('1008','3000')
	,	('1009','3000')
	,	('1010','3010')
	,	('1011','3010')
	,	('1012','3010')
	,	('1013','3010')
	,	('1014','3010')
	,	('1015','3010')
	,	('1016','3010')
	,	('1017','3010')
	,	('1018','3010')
	,	('1019','3010')
	,	('1020','3020')
	,	('1021','3020')
	,	('1022','3020')
	,	('1023','3020')
	,	('1024','3020')
	,	('1025','3020')
	,	('1026','3020')
	,	('1027','3020')
	,	('1028','3020')
	,	('1029','3020')
	,	('1029','3030')
	,	('1028','3030')
	,	('1027','3030')
	,	('1026','3030')
	,	('1025','3030')
	,	('1024','3030')
	,	('1023','3030')
	,	('1022','3030')
	,	('1021','3030')
	,	('1010','3030')
	,	('1019','3040')
	,	('1018','3040')
	,	('1017','3040')
	,	('1016','3040')
	,	('1015','3040')
	,	('1014','3040')
	,	('1013','3040')
	,	('1012','3040')
	,	('1011','3040')
	,	('1010','3040')
	,	('1009','3050')
	,	('1008','3050')
	,	('1007','3050')
	,	('1006','3050')
	,	('1005','3050')
	,	('1004','3050')
	,	('1003','3050')
	,	('1002','3050')
	,	('1001','3050')
	,	('1029','3060')
	,	('1029','3060')
	,	('1028','3060')
	,	('1027','3060')
	,	('1026','3060')
	,	('1025','3060')
	,	('1024','3060')
	,	('1023','3060')
	,	('1022','3060')
	,	('1021','3060')
	,	('1010','3060')
	,	('1019','3070')
	,	('1018','3070')
	,	('1017','3070')
	,	('1016','3070')
	,	('1015','3070')
	,	('1014','3070')
	,	('1013','3070')
	,	('1012','3070')
	,	('1011','3070')
	,	('1010','3070')
	,	('1009','3080')
	,	('1008','3080')
	,	('1007','3080')
	,	('1006','3080')
	,	('1005','3080')
	,	('1004','3080')
	,	('1003','3080')
	,	('1002','3080')
	,	('1001','3080')
	,	('1000','3080');

