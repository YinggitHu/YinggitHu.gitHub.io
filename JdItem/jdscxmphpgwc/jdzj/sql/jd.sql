#用户登录表
CREATE DATABASE jd CHARSET=UTF8;
USE jd;
CREATE TABLE jd_user(
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(20),
  upwd VARCHAR(32)
);
INSERT INTO jd_user VALUES(null,'tom','123456');
INSERT INTO jd_user VALUES(null,'marry','123456');
INSERT INTO jd_user VALUES(null,'jerry','123456');
INSERT INTO jd_user VALUES(null,'qiangdong','123456');
INSERT INTO jd_user VALUES(null,'naicha','123456');

产品表 productlist.php

CREATE TABLE jd_product(
 pid INT PRIMARY KEY AUTO_INCREMENT,
 pname VARCHAR(100),
 price DECIMAL(10,2), 
 pic VARCHAR(100)
);

CREATE TABLE jd_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  pid INT,  
  pcount INT
);
INSERT INTO jd_cart VALUES(null,1,1,1);
INSERT INTO jd_cart VALUES(null,1,2,2);






