// 创建数据库
create DATABASE bbb charset utf8; 
// 使用数据库
use bbb; 
// 创建表
create table table1(id int PRIMARY KEY AUTO_INCREMENT, name varchar(20) NOT NULL, title varchar(30) NULL, sex SMALLINT NOT NULL, description varchar(40));
// 插入数据
insert into table1 (name, sex, title, description) VALUES ('Tom', 1, 'English', 'a student'); 

INSERT into stu(sname,class_id,age)VALUES ('小明',1,33),('小李',3,2),('小张',2,28),('小关',null,25),('小赵',2,19);
// 查询条件
SELECT class_id FROM `stu`；
SELECT * FROM `stu` WHERE class_id = 2 AND sname like '%张%';
// 不同的Distinct
SELECT DISTINCT class_id from stu 

SELECT * FROM `stu` WHERE age>=20 AND age<=40;
SELECT * FROM `stu` WHERE age BETWEEN 20 and 40;
SELECT * FROM `stu` WHERE age NOT BETWEEN 20 and 40;
SELECT * FROM stu where class_id = 2 OR class_id = 3;
SELECT * FROM stu WHERE class_id in(1,3);
select count(*) from stu;

// null
SELECT * FROM `stu` WHERE class_id is NULL;
SELECT * FROM `stu` WHERE class_id is NOT NULL;
SELECT sname,IFNULL(class_id,'未分配') FROM `stu`;
SELECT sname,IF(class_id,class_id,'未分配') FROM `stu`;
// 排序
SELECT sname, class_id, age FROM stu ORDER BY age DESC;
SELECT sname, class_id, age FROM stu ORDER BY age ASC;
SELECT * FROM `stu` ORDER BY age DESC LIMIT 2;
SELECT * FROM `stu` ORDER BY age DESC LIMIT 1,3;     
// 从1（第二个）个开始，取3条。
SELECT * FROM `stu` WHERE class_id = 2 AND age is NOT NULL ORDER BY age ASC;
SELECT * FROM `stu` WHERE class_id = 2 AND age is NOT NULL ORDER BY age ASC LIMIT 1;

// 子查询
SELECT age FROM `stu` WHERE class_id = 2 AND age is NOT NULL ORDER BY age ASC LIMIT 1;
SELECT * FROM `stu` WHERE age = (SELECT age FROM `stu` WHERE class_id = 2 AND age is NOT NULL ORDER BY age ASC LIMIT 1);

//修改 删除
UPDATE stu SET class_id = 2 WHERE class_id is NULL;
UPDATE stu SET class_id = 1 WHERE age < 20;
UPDATE stu set age= age+10 WHERE class_id = 1 AND age < 20;

DELETE FROM stu WHERE age <30 AND class_id is NULL;
DELETE FROM stu ORDER BY age limit 1;
DELETE FROM stu ORDER BY id DESC limit 1;

// 改表结构
ALTER TABLE stu RENAME stus;
RENAME TABLE stus to stu;

CREATE TABLE stu2 SELECT * FROM stu; 
DELETE FROM stu2;
DROP TABLE IF EXISTS stu2;

ALTER TABLE stu2 MODIFY sname varchar(40) NOT NULL;
ALTER TABLE stu2 ADD sex SMALLINT DEFAULT NULL;
ALTER TABLE stu2 ADD qq varchar(30) DEFAULT NULL first; // 放第一个
ALTER TABLE stu2 drop qq; // 删除列

// 主键修改
ALTER TABLE stu2 MODIFY id int NOT NULL;
ALTER TABLE `stu2` MODIFY id int NOT NULL AUTO_INCREMENT,ADD PRIMARY KEY(id);
ALTER TABLE `stu3` DROP PRIMARY KEY ,ADD PRIMARY KEY ( `id` )
ALTER TABLE stu3 MODIFY id int NOT NULL AUTO_INCREMENT;

// 字符串函数
select left(cname,2), right(cname,2) from class;
UPDATE class set description = CONCAT('http://cdn.com',mid(description, 7)) WHERE id>4; // 批量替换
SELECT Substring(cname,2) FROM `class`; //截取
SELECT char_length(cname) FROM `class` // 长度

SELECT IF(char_length(description)>5,Concat(left(description,5), '...'),description) as description FROM `class`;

// 正则
SELECT * from class where cname REGEXP '^.h';
SELECT * FROM `class` WHERE cname REGEXP 'php|NODE';
UPDATE `class` SET cname = REPLACE(cname, cname, concat('zx of ', cname)) where cname REGEXP 'php|jAVA';
SELECT * FROM `class` WHERE cname like '%p%';// 包含

alter table class add stat int(5) unsigned;  // 非负数
alter table class add status int(5) ZEROFILL; // 显示0填充

alter table class add status float(10,2); // 10位，2位小数，不准确，适合小位数
 alter table class add status DECIMAL(10,2); 
UPDATE class set a= 992123.12 where id = 1;

//Enum
alter table stu add sex ENUM('男','女') DEFAULT NULL;
Insert into stu (sname, class_id, sex) VALUES ('小黄',1,2); // 2是枚举类型的序号（1,2）

//set
create table article(id int PRIMARY KEY AUTO_INCREMENT, title varchar(30));
alter table article add flag SET('推荐','置顶','热门','图文')
insert into article(title, flag) VALUES ('阿斯蒂芬顺丰到付','推荐,置顶'),('大发发发','图文,热门');
SELECT * FROM `article` WHERE find_in_set('推荐',flag);
SELECT * FROM `article` WHERE flag LIKE '%置顶%';

// 日期
alter table stu add DateofBirth datetime DEFAULT NULL;
UPDATE stu set DateofBirth = "1998-02-12 08:22:11" where id = 1;
SELECT sname,date_format(DateofBirth, '%Y年%m月%d日 %h:%i：%s') FROM `stu` 
SELECT sname,time_format(DateofBirth, '%h:%i：%s') FROM `stu` 

alter table stu add update_at timestamp DEFAULT CURRENT_TIMESTAMP;
ALTER table stu drop update_at;
ALTER table stu add update_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
UPDATE stu set sname = '找寻' where id = 3;
SELECT YEAR(DateofBirth), MONTH(DateofBirth), DAY(DateofBirth), HOUR(DateofBirth), MINUTE(DateofBirth), SECOND(DateofBirth) FROM `stu`
UPDATE stu set update_at= "1982-1-11 11:11:11" where id = 1;
// 日期函数
SELECT now() ,CURRENT_DATE() , CURRENT_TIME();
SELECT DAYOFMONTH(now()) // 这个月的第几天

set @time= time(now());
SELECT @time;
set @time= time(now());
select time_to_sec(@time),sec_to_time(time_to_sec(@time));

select datediff(now(), DateofBirth) from stu; // 相差天数
select timestampdiff(YEAR, DateofBirth, now()) from stu; // 相差年数
select timestampdiff(MONTH, DateofBirth, now()) from stu; // 相差月数
select timestampdiff(DAY, DateofBirth, now()) from stu; // 相差天数
select timestampdiff(HOUR, DateofBirth, now()) from stu; // 相差小时
SELECT timediff(time(now()),time(DateofBirth)) from stu;

// 查询
SELECT * FROM `stu` WHERE DateofBirth BETWEEN '1990-01-01' AND '1999-01-01';
SELECT * FROM `stu` order by DateofBirth desc;
SELECT * FROM `stu` order by DateofBirth desc limit 1;
SELECT * FROM `stu` WHERE DateofBirth = (select DateofBirth from stu ORDER BY DateofBirth desc limit 1); // 避免生日相同
SELECT count(id),class_id FROM `stu`GROUP by class_id;
SELECT count(id),class_id FROM `stu` WHERE Year(DateofBirth)>1980 AND YEAR(DateofBirth)<2000 GROUP by class_id ;
SELECT count(id) as total,class_id FROM `stu` WHERE Year(DateofBirth)>1980 AND YEAR(DateofBirth)<2000 GROUP by class_id ORDER BY total Desc;
SELECT count(id) as total,class_id FROM `stu` WHERE Year(DateofBirth)>1980 AND YEAR(DateofBirth)<2000 GROUP by class_id ORDER BY total Desc LIMIT 1;
// 大于20岁 女
SELECT * FROM `stu` WHERE Timestampdiff(Year,DateofBirth,now())>=20 AND sex = 2;
// 大于20岁 女，人最多的班级
SELECT  count(id) as total, class_id FROM `stu` WHERE Timestampdiff(Year,DateofBirth,now())>=20 AND sex = 2 GROUP by class_id;
SELECT  count(id) as total, class_id FROM `stu` WHERE Timestampdiff(Year,DateofBirth,now())>=20 AND sex = 2 GROUP by class_id ORDER BY total desc LIMIT 1;

// 加时间
update stu set DateofBirth = addtime(DateofBirth, '8:00:00');
update stu set DateofBirth = timestamp(DateofBirth, '8:00:00') where id = 3;
// 7天后日期 7 天前日期
SELECT date_add(now(), INTERVAL 7 Day)
SELECT date_add(now(), INTERVAL -7 Day) // Year, Month , Day , Hour, Minute
SELECT date_add(now(), INTERVAL '3 8' HOUR_MINUTE)
SELECT date_add(now(), INTERVAL '3:08' HOUR_MINUTE)

// 月初月末
SELECT last_day(now())
// 往前减
SELECT date_sub(now(), INTERVAL 5 Day);
// 月里多少天
SELECT DayofMonth(now())
// 月初
SELECT date_sub(now(),INTERVAL DayofMonth(now())-1 Day)
Alter table article add pub_time dateTime  DEFAULT now()

Alter table article add status ENUM('1','2','3');
update article set status=1;

// 本月
set @start= date_sub(now(), INTERVAL DayofMonth(now())-1 Day);
set @end =  last_day(now());
SELECT * FROM `article` WHERE pub_time>@start AND pub_time<=@end;
// 3个月内
set @during= date_sub(now(), INTERVAL 3 MONTH);
select @during;
SELECT * FROM `article` WHERE pub_time<=@during;
// 大宇20岁
select * from stu WHERE DateofBirth> date_sub(now(), INTERVAL 20 Year);

// 星期 DayofWeek Weekday
SELECT Dayofweek(now()) sun = 1  
SELECT date_add(now(), INTERVAL 3-Dayofweek(now()) Day) //周二日期
SELECT Weekday(now()) mod = 0
SELECT date_add(now(), INTERVAL 1-weekday(now()) Day) // 周二日期