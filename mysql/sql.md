# 创建数据库
create DATABASE bbb charset utf8; 
# 使用数据库
use bbb; 
# 创建表
create table table1(id int PRIMARY KEY AUTO_INCREMENT, name varchar(20) NOT NULL, title varchar(30) NULL, sex SMALLINT NOT NULL, description varchar(40));
# 删除表
Drop table if EXISTS table1;

# 复制表
create table hdcms like class;
insert into hdcms select * from class;
  # 或者
create table hdjs select * from class;
  # 插入部分数据
insert into hdcms (cname) select cname from class;

# 插入数据
insert into table1 (name, sex, title, description) VALUES ('Tom', 1, 'English', 'a student'); 

INSERT into stu(sname,class_id,age)VALUES ('小明',1,33),('小李',3,2),('小张',2,28),('小关',null,25),('小赵',2,19);
# 查询条件
SELECT class_id FROM `stu`；
SELECT * FROM `stu` WHERE class_id = 2 AND sname like '%张%';
# 不同的Distinct
SELECT DISTINCT class_id from stu 

SELECT * FROM `stu` WHERE age>=20 AND age<=40;
SELECT * FROM `stu` WHERE age BETWEEN 20 and 40;
SELECT * FROM `stu` WHERE age NOT BETWEEN 20 and 40;
SELECT * FROM stu where class_id = 2 OR class_id = 3;
SELECT * FROM stu WHERE class_id in(1,3);
select count(*) from stu;

# null
SELECT * FROM `stu` WHERE class_id is NULL;
SELECT * FROM `stu` WHERE class_id is NOT NULL;
SELECT sname,IFNULL(class_id,'未分配') FROM `stu`;
SELECT sname,IF(class_id,class_id,'未分配') FROM `stu`;
# 排序
SELECT sname, class_id, age FROM stu ORDER BY age DESC;
SELECT sname, class_id, age FROM stu ORDER BY age ASC;
SELECT * FROM `stu` ORDER BY age DESC LIMIT 2;
SELECT * FROM `stu` ORDER BY age DESC LIMIT 1,3;     
# 从1（第二个）个开始，取3条。
SELECT * FROM `stu` WHERE class_id = 2 AND age is NOT NULL ORDER BY age ASC;
SELECT * FROM `stu` WHERE class_id = 2 AND age is NOT NULL ORDER BY age ASC LIMIT 1;

# 子查询
SELECT age FROM `stu` WHERE class_id = 2 AND age is NOT NULL ORDER BY age ASC LIMIT 1;
SELECT * FROM `stu` WHERE age = (SELECT age FROM `stu` WHERE class_id = 2 AND age is NOT NULL ORDER BY age ASC LIMIT 1);

#修改 删除
UPDATE stu SET class_id = 2 WHERE class_id is NULL;
UPDATE stu SET class_id = 1 WHERE age < 20;
UPDATE stu set age= age+10 WHERE class_id = 1 AND age < 20;

DELETE FROM stu WHERE age <30 AND class_id is NULL;
DELETE FROM stu ORDER BY age limit 1;
DELETE FROM stu ORDER BY id DESC limit 1;

# 改表结构
ALTER TABLE stu RENAME stus;
RENAME TABLE stus to stu;

CREATE TABLE stu2 SELECT * FROM stu; 
DELETE FROM stu2;
DROP TABLE IF EXISTS stu2;

ALTER TABLE stu2 MODIFY sname varchar(40) NOT NULL;
ALTER TABLE stu2 ADD sex SMALLINT DEFAULT NULL;
ALTER TABLE stu2 ADD qq varchar(30) DEFAULT NULL first; # 放第一个
ALTER TABLE stu2 drop qq; # 删除列

# 主键修改
ALTER TABLE stu2 MODIFY id int NOT NULL;
ALTER TABLE `stu2` MODIFY id int NOT NULL AUTO_INCREMENT,ADD PRIMARY KEY(id);
ALTER TABLE `stu3` DROP PRIMARY KEY ,ADD PRIMARY KEY ( `id` )
ALTER TABLE stu3 MODIFY id int NOT NULL AUTO_INCREMENT;

# 字符串函数
select left(cname,2), right(cname,2) from class;
UPDATE class set description = CONCAT('http:#cdn.com',mid(description, 7)) WHERE id>4; # 批量替换
SELECT Substring(cname,2) FROM `class`; #截取
SELECT char_length(cname) FROM `class` # 长度

SELECT IF(char_length(description)>5,Concat(left(description,5), '...'),description) as description FROM `class`;

# 正则
SELECT * from class where cname REGEXP '^.h';
SELECT * FROM `class` WHERE cname REGEXP 'php|NODE';
UPDATE `class` SET cname = REPLACE(cname, cname, concat('zx of ', cname)) where cname REGEXP 'php|jAVA';
SELECT * FROM `class` WHERE cname like '%p%';# 包含

alter table class add stat int(5) unsigned;  # 非负数
alter table class add status int(5) ZEROFILL; # 显示0填充

alter table class add status float(10,2); # 10位，2位小数，不准确，适合小位数
 alter table class add status DECIMAL(10,2); 
UPDATE class set a= 992123.12 where id = 1;

#Enum
alter table stu add sex ENUM('男','女') DEFAULT NULL;
Insert into stu (sname, class_id, sex) VALUES ('小黄',1,2); # 2是枚举类型的序号（1,2）

#set
create table article(id int PRIMARY KEY AUTO_INCREMENT, title varchar(30));
alter table article add flag SET('推荐','置顶','热门','图文')
insert into article(title, flag) VALUES ('阿斯蒂芬顺丰到付','推荐,置顶'),('大发发发','图文,热门');
SELECT * FROM `article` WHERE find_in_set('推荐',flag);
SELECT * FROM `article` WHERE flag LIKE '%置顶%';

# 日期
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
# 日期函数
SELECT now() ,CURRENT_DATE() , CURRENT_TIME();
SELECT DAYOFMONTH(now()) # 这个月的第几天

set @time= time(now());
SELECT @time;
set @time= time(now());
select time_to_sec(@time),sec_to_time(time_to_sec(@time));

select datediff(now(), DateofBirth) from stu; # 相差天数
select timestampdiff(YEAR, DateofBirth, now()) from stu; # 相差年数
select timestampdiff(MONTH, DateofBirth, now()) from stu; # 相差月数
select timestampdiff(DAY, DateofBirth, now()) from stu; # 相差天数
select timestampdiff(HOUR, DateofBirth, now()) from stu; # 相差小时
SELECT timediff(time(now()),time(DateofBirth)) from stu;

# 查询
SELECT * FROM `stu` WHERE DateofBirth BETWEEN '1990-01-01' AND '1999-01-01';
SELECT * FROM `stu` order by DateofBirth desc;
SELECT * FROM `stu` order by DateofBirth desc limit 1;
SELECT * FROM `stu` WHERE DateofBirth = (select DateofBirth from stu ORDER BY DateofBirth desc limit 1); # 避免生日相同
SELECT count(id),class_id FROM `stu`GROUP by class_id;
SELECT count(id),class_id FROM `stu` WHERE Year(DateofBirth)>1980 AND YEAR(DateofBirth)<2000 GROUP by class_id ;
SELECT count(id) as total,class_id FROM `stu` WHERE Year(DateofBirth)>1980 AND YEAR(DateofBirth)<2000 GROUP by class_id ORDER BY total Desc;
SELECT count(id) as total,class_id FROM `stu` WHERE Year(DateofBirth)>1980 AND YEAR(DateofBirth)<2000 GROUP by class_id ORDER BY total Desc LIMIT 1;
# 大于20岁 女
SELECT * FROM `stu` WHERE Timestampdiff(Year,DateofBirth,now())>=20 AND sex = 2;
# 大于20岁 女，人最多的班级
SELECT  count(id) as total, class_id FROM `stu` WHERE Timestampdiff(Year,DateofBirth,now())>=20 AND sex = 2 GROUP by class_id;
SELECT  count(id) as total, class_id FROM `stu` WHERE Timestampdiff(Year,DateofBirth,now())>=20 AND sex = 2 GROUP by class_id ORDER BY total desc LIMIT 1;

# 加时间
update stu set DateofBirth = addtime(DateofBirth, '8:00:00');
update stu set DateofBirth = timestamp(DateofBirth, '8:00:00') where id = 3;
# 7天后日期 7 天前日期
SELECT date_add(now(), INTERVAL 7 Day)
SELECT date_add(now(), INTERVAL -7 Day) # Year, Month , Day , Hour, Minute
SELECT date_add(now(), INTERVAL '3 8' HOUR_MINUTE)
SELECT date_add(now(), INTERVAL '3:08' HOUR_MINUTE)

# 月初月末
SELECT last_day(now())
# 往前减
SELECT date_sub(now(), INTERVAL 5 Day);
# 月里多少天
SELECT DayofMonth(now())
# 月初
SELECT date_sub(now(),INTERVAL DayofMonth(now())-1 Day)
Alter table article add pub_time dateTime  DEFAULT now()

Alter table article add status ENUM('1','2','3');
update article set status=1;

# 本月
set @start= date_sub(now(), INTERVAL DayofMonth(now())-1 Day);
set @end =  last_day(now());
SELECT * FROM `article` WHERE pub_time>@start AND pub_time<=@end;
# 3个月内
set @during= date_sub(now(), INTERVAL 3 MONTH);
select @during;
SELECT * FROM `article` WHERE pub_time<=@during;
# 大宇20岁
select * from stu WHERE DateofBirth> date_sub(now(), INTERVAL 20 Year);

# 星期 DayofWeek Weekday
SELECT Dayofweek(now()) sun = 1  
SELECT date_add(now(), INTERVAL 3-Dayofweek(now()) Day) #周二日期
SELECT Weekday(now()) mod = 0
SELECT date_add(now(), INTERVAL 1-weekday(now()) Day) # 周二日期

# 随机排序
SELECT Rand() # 随机数
SELECT * FROM `stu` order BY Rand()
SELECT * FROM `stu` ORDER BY MONTH(DateofBirth) Desc;
# 年龄最大90 后
SELECT * FROM `stu` WHERE Year(DateofBirth)>=1990 AND Year(DateofBirth)<2000 order BY DateofBirth ASC limit 1;


# 自定义排序
 # a 在第几个出现
select field('a', 'a', 'b', 'c'); # 1
 SELECT sname,right(sname,1) as fn FROM `stu` order by field(fn,'刘','关', '明' ) desc;

 # count * 显示多条记录
 SELECT count(class_id) FROM `stu`

 # min , max
 SELECT year(max(DateofBirth)) FROM `stu`
 SELECT * FROM `stu` WHERE year(DateofBirth)=( SELECT year(max(DateofBirth)) FROM `stu`)

 # SUM AVG
 select sum(click) from article
  select avg(click) from article
  #  小于平均数的点击数
  SELECT * FROM `article` WHERE click<(select avg(click) from article)
  # 年龄
  SELECT sname, timestampdiff(year,DateOfBirth , now()) as age FROM `stu` 
  # 平均年龄去小数
  SELECT sname, ROUND(AVG(timestampdiff(year,DateOfBirth , now()))) as age FROM `stu` 
  # Distinct


SELECT Distinct class_id,sname FROM stu;
SELECT Distinct class_id,sname FROM stu where class_id is not null;
SELECT * FROM `stu` WHERE class_id is not null GROUP BY class_id ;
# 女所在班级分组
SELECT * FROM `stu` WHERE class_id is not null AND sex='女' GROUP BY class_id ;
# 每个班级最小同学。
SELECT max(DateofBirth) FROM `stu`
SELECT max(DateofBirth) FROM `stu` where class_id is NOT null GROUP by class_id;
SELECT max(DateofBirth),class_id,sname FROM `stu` GROUP by class_id;
# 每个班级男女有多少个
SELECT count(*),class_id FROM `stu` GROUP by class_id
SELECT count(*),class_id, sex FROM `stu` GROUP by class_id,sex order by class_id desc;
# 人数超过两个的班级 HAVING 筛选
SELECT class_id,count(*)as total FROM `stu` GROUP BY class_id HAVING total>2;

# 哪个姓氏学生 多
SELECT right(sname, 1) as na, count(*) as num FROM `stu` GROUP BY na order by num  desc limit 1;
1# 姓氏最多
SELECT count(*) FROM `stu` GROUP BY right(sname, 1) order by count(*)  desc limit 1
2
SELECT right(sname, 1) as na FROM `stu` GROUP BY na HAVING count(*)  = (SELECT count(*) FROM `stu` GROUP BY right(sname, 1) order by count(*)  desc limit 1)
3 姓氏最多的记录
SELECT * FROM `stu` WHERE right(sname,1) in (SELECT right(sname, 1) as na FROM `stu` GROUP BY na HAVING count(*)  = (SELECT count(*) FROM `stu` GROUP BY right(sname, 1) order by count(*)  desc limit 1))

# 多表 Exsits Not Exist 过滤
SELECT * FROM `stu` WHERE EXISTS(Select null) # 括号有结果

SELECT * FROM `stu` s WHERE EXISTS (SELECT * FROM `stu`  WHERE  s.id = 1)
create table stu_lesson(id int PRIMARY KEY AUTO_INCREMENT, stu_id int, lesson_id int )
Insert into stu_lesson (stu_id, lesson_id)VALUES(1,1),(1,2),(2,3),(3,4),(4,2),(5,3),(6,1)
# 有课程的同学
SELECT * FROM `stu` WHERE EXISTS(select * from stu_lesson where stu_lesson.stu_id = stu.id)
# 没有课程的同学
SELECT * FROM `stu` WHERE NOT EXISTS(select * from stu_lesson where stu_lesson.stu_id = stu.id)
/ 有2门课程的同学
SELECT * FROM `stu` WHERE EXISTS(select * from stu_lesson where stu_lesson.stu_id = stu.id GROUP BY stu_id HAVING count(*)>=2)
# 多表查询 笛卡尔积
SELECT * FROM stu as s,class as c where s.class_id = c.id;

# 内连接 保留满足条件的列 取交集
# 班级所有女生发表文章
SELECT * FROM stu as s INNER JOIN class as c INNER JOIN article as aa ON s.class_id = c.id AND s.id = aa.stu_id # 当成一张表

SELECT * FROM stu as s INNER JOIN class as c INNER JOIN article as aa ON s.class_id = c.id AND s.id = aa.stu_id WHERE sex= '女'

# 哪个班级发表的文章多
select c.id,count(*) as total from stu as s inner join class as c inner join article as a on s.class_id = c.id and s.id = a.stu_id group by c.id having total >=2

# 每个班级的总点击数和平均点击数
select c.id,count(*),sum(click),avg(click) as total from stu as s inner join class as c inner join article as a on s.class_id = c.id and s.id = a.stu_id group by c.id

# 外连接应用
create table stu_info(id int PRIMARY KEY AUTO_INCREMENT, qq varchar(9),mobile int, stu_id int)
ALTER table stu_info MODIFY qq int Default NULL
INSERT INTO stu_info (qq,mobile,stu_id) VALUES (123123, 1231231, 1) ,(123123, 1231231, 7)  ,(123123, 1231231, 6) 
# 左连接 保留左边表格所有列
# 哪些学生没有qq
SELECT * FROM `stu` Left JOIN stu_info on stu.id = stu_info.stu_id

SELECT * FROM `stu` Left JOIN stu_info on stu.id = stu_info.stu_id where qq is null

# 哪一个班级没有学生
SELECT * FROM `stu` Right JOIN class ON stu.class_id = class.id
SELECT * FROM `stu` Right JOIN class ON stu.class_id = class.id where stu.id is null

# 哪一个学生没有设置班级
SELECT s.sname, if(s.class_id, c.cname, '无') FROM class as c right JOIN stu as s on c.id= s.class_id

# 自连接
# 查找与后盾人一个班级的同学
# 子查询方法
SELECT * FROM `stu` WHERE class_id = (select class_id from stu where sname = '后盾人') AND sname != '后盾人'
# 自连接方法

SELECT * FROM `stu` as s1 inner JOIN stu as s2 ON s1.class_id = s2.class_id 
SELECT * FROM `stu` as s1 inner JOIN stu as s2 ON s1.class_id = s2.class_id where s1.sname = '后盾人'
SELECT * FROM `stu` as s1 inner JOIN stu as s2 ON s1.class_id = s2.class_id where s1.sname = '后盾人' AND s2.sname != '后盾人'

# 多对多关系 使用中间表
# 哪个班同学喜欢php
select * from class as c inner join stu as s on c.id = s.class_id inner join stu_lesson as sl on s.id = sl.stu_id
# Union All 连接结果

SELECT * FROM `stu` Union ALL SELECT * FROM `stu`

# 事务
Begin;
...
commit;// 最后得提交生效

start Transaction;
... // 执行就生效，但是可以rollback
Rollback;

# 外键约束 
# CONSTRAINT 外键名字 子表名_主表名 
# FOREIGN KEY(外键列) 
# REFERENCES 主表名（主表关联列） 
# 外键产生的行为(删除/更新行为) ON DELETE CASCADE 
create table stu2(id int PRIMARY KEY AUTO_INCREMENT,sname char(30) NOT NULL, class_id int DEFAULT NULL, CONSTRAINT stu2_class FOREIGN KEY(class_id) REFERENCES class(id) ON  DELETE CASCADE) 

# 添加外键
ALTER TABLE stu ADD CONSTRAINT stu_class FOREIGN KEY(class_id) REFERENCES class(id) ON DELETE CASCADE

# 删除外键
ALTER TABLE stu DROP FOREIGN KEY stu_class