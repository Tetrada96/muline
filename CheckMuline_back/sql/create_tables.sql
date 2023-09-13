CREATE TABLE IF NOT EXISTS Users (
  id SERIAL NOT NULL PRIMARY KEY,
  email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	is_activated BOOLEAN NOT NULL,
	activation_link varchar(255) NOT NULL,
	created_at date,
	updated_at date
);


CREATE TABLE IF NOT EXISTS Colors (
  id SERIAL NOT NULL PRIMARY KEY,
  color varchar(255) NOT NULL,
	name varchar(255) NOT NULL,
	name_color_eng varchar(255) NOT NULL,
	name_color_ru varchar(255) NOT NULL
);

INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#FFFFFF','blanc','White','Белый'),
	 ('#E9E9D4','Ecru','Ecru','Кремовый'),
	 ('#FFFFFF','B5200','Ultra white','Белоснежный'),
	 ('#9F3845','150','Dusty Rose — ultra vy dk','Пыльная роза, ультра очень тёмный (оч. Т. )'),
	 ('#F2BCC5','151','Dusty Rose — vy lt','Пыльная роза, очень светлый (оч. Св. )'),
	 ('#CFA296','152','Shell Pink — med lt','Розовых ракушек, средне светлый (ср. Св. )'),
	 ('#DEBCD9','153','Violet — vy lt','Фиолетовый, очень светлый (оч. Св)'),
	 ('#4D2E3D','154','Grape — vy dk','Красного винограда, оч. Т. '),
	 ('#908BC3','155','Blue Violet — med dk','Сине-фиолетовый, ср. Т. '),
	 ('#8B9AC5','156','Blue Violet — med lt','Сине-фиолетовый, ср. Св. ');
INSERT INTO Colors (color,name,name_color_eng,name_color_ru) VALUES
	 ('#ABC2DE','157','Cornflower Blue — vy lt','Васильковый, кобальтовый, оч. Св. '),
	 ('#465082','158','Cornflower Blue-med vy dk','Васильковый, кобальтовый, ср. Оч. Т. '),
	 ('#A7B4CD','159','Gray Blue-lt','Серо-синий, св. '),
	 ('#8290AE','160','Gray Blue-med','Серо-синий, ср. '),
	 ('#667594','161','Gray Blue','Серо-синий'),
	 ('#BDDBE6','162','Blue-ultra vy lt','Голубой, ультра оч. Св. '),
	 ('#569571','163','Celadon Green-med','Серовато-зеленый, ср. '),
	 ('#9FCC8D','164','Forest Green-lt','Зеленый лесной, св. '),
	 ('#DAD878','165','Moss Green-vylt','Мох, оч. Св. '),
	 ('#BFBB20','166','Moss Green-med lt','Мох, ср. Св. ');
INSERT INTO Colors (color,name,name_color_eng,name_color_ru) VALUES
	 ('#9F8447','167','Yellow Beige-vy dk','Желтовато-бежевый, оч. Т. '),
	 ('#B4C3C1','168','Pewter-vy lt','Оловянный, оч. Св. '),
	 ('#8B9A94','169','Pewter-lt','Оловянный, св. '),
	 ('#9870AC','208','Lavender-vy dk','Лаванда, оч. Т. '),
	 ('#B693B6','209','Lavender-dk','Лаванда, т. '),
	 ('#C9AFDD','210','Lavender-med','Лаванда, ср. '),
	 ('#D4C3E4','211','Lavender-lt','Лаванда, св. '),
	 ('#884238','221','Shel lPink-vy dk','Розовых ракушек, оч. Т. '),
	 ('#BB817B','223','Shell Pink-lt','Розовых ракушек, св. '),
	 ('#DFB3A6','224','ShellPink-vy lt','Розовых ракушек, оч. Св. ');
INSERT INTO Colors (color,name,name_color_eng,name_color_ru) VALUES
	 ('#784E24','225','ShellPink-ultra vy lt','Розовых ракушек, ультра св. '),
	 ('#784E24','300','Mahogany-vy dk','Красного дерева, оч. Т. '),
	 ('#AA6730','301','Mahogany-med','Красного дерева, ср. '),
	 ('#9E3332','304','Christmas Red-med','Рождественский красный, ср. '),
	 ('#F6E311','307','Lemon','Лимонный'),
	 ('#B84351','309','Rose-dk','Розы, т. '),
	 ('#000000','310','Black','Черный'),
	 ('#30506F','311','Navy Blue-med','Темно-синий, ср. '),
	 ('#386189','312','Navy Blue-lt','Темно-синий, св. '),
	 ('#8E5D5C','315','Antique Mauve-med dk','Античный розовато-лиловый, ср. Т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#BF889C','316','Antique Mauve-med','Античный розовато-лиловый, ср. '),
	 ('#697275','317','Pewter Grey','Оловянносерый'),
	 ('#A0A7B0','318','Steel Grey-lt','Стальной, св. '),
	 ('#35633D','319','Pistachio Green-vy dk','Фисташково-зеленый, оч. Т. '),
	 ('#71a072','320','Pistachio Green-med','Фисташково-зеленый, ср. '),
	 ('#ce1f32','321','Christmas Red','Рождественскийкрасный'),
	 ('#647e9d','322','NavyBlue-vy lt','Темно-синий, оч. Св. '),
	 ('#a92332','326','Rose-vy dk','Розы, оч. Т. '),
	 ('#723657','327','Violet-vy dk','Фиолетовый, оч. Т. '),
	 ('#6c5086','333','BlueViolet-vy dk','Сине-фиолетовый, оч. Т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#4c698c','334','BabyBlue-med','Нежноголубой, ср. '),
	 ('#e56d7f','335','Rose','Розы'),
	 ('#0c1225','336','Navy Blue','Темно-синий'),
	 ('#9389c1','340','Blue Violet-med','Сине-фиолетовый, ср. '),
	 ('#a2accd','341','Blue Violet-lt','Сине-фиолетовый, св. '),
	 ('#bf3e31','347','Salmon — vy dk','Лососевый, оч. Т. '),
	 ('#c24731','349','Coral-dk','Коралловокрасный, т. '),
	 ('#e46647','350','Coral-med','Кораллово красный, ср. '),
	 ('#f78465','351','Coral','Кораллово красный'),
	 ('#f69d80','352','Coral-lt','Коралловокрасный, св. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#fdbca1','353','Peach','Персиковый'),
	 ('#9a3b2d','355','TerraCotta-dk','Терракотовый, т. '),
	 ('#a06757','356','TerraCotta-med','Терракотовый, ср. '),
	 ('#4c7047','367','PistachioGreen-dk','Фисташково-зеленый, т. '),
	 ('#91ab84','368','PistachioGreen-lt','Фисташково-зеленый, св. '),
	 ('#ccdcbe','369','PistachioGreen-vy lt','Фисташково-зеленый, оч. Св. '),
	 ('#bbaa55','370','Mustard-med','Горчичный, ср. '),
	 ('#a08f4d','371','Mustard','Горчичный'),
	 ('#9c8c4a','372','Mustard — lt','Горчичный, св. '),
	 ('#934d29','400','Mahogany — dk','Красного дерева, т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#e8a76d','402','Mahogany — vy lt','Красного дерева, оч. Св. '),
	 ('#c49a87','407','Desert Sand — dk','Пустынного песка, т. '),
	 ('#535657','413','Pewter Grey — dk','Оловянно серый, т. '),
	 ('#95909d','414','Steel Grey — dk','Стальной, т. '),
	 ('#d3d4db','415','Pearl Grey','Жемчужно серый'),
	 ('#866226','420','Hazelnut Brown — dk','Фундука, т. '),
	 ('#d0ba79','422','Hazelnut Brown — lt','Фундука, св. '),
	 ('#775437','433','Brown — med','Коричневый, ср. '),
	 ('#b78237','434','Brown — lt','Коричневый, св. '),
	 ('#c4863a','435','Brown — vy lt','Коричневый, оч. Св. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#c09557','436','Tan','Желто-коричневый'),
	 ('#d9b879','437','Tan — lt','Желто-коричневый, св. '),
	 ('#f5d500','444','Lemon — dk','Лимонный, т. '),
	 ('#f0ed85','445','Lemon — lt','Лимонный, св. '),
	 ('#978b81','451','Shell Grey — dk','Серых ракушек, т. '),
	 ('#bbaea6','452','Shell Grey — med','Серых ракушек, ср. '),
	 ('#e3dcdb','453','Shell Grey — lt','Серых ракушек, св. '),
	 ('#798738','469','Avocado Green','Авокадо'),
	 ('#98a859','470','Avocado Green — lt','Авокадо, св. '),
	 ('#929937','471','Avocado Green — vy lt','Авокадо, оч. Св. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#dee077','472','Avocado Green — ultra lt','Авокадо, ультра св. '),
	 ('#98232c','498','Christmas Red — dk','Рождественский красный, т. '),
	 ('#14361e','500','Blue Green — vy dk','Сине-зеленый, оч. Т. '),
	 ('#496f5c','501','Blue Green — dk','Сине-зеленый, т. '),
	 ('#799a83','502','Blue Green','Сине-зеленый'),
	 ('#8ebea9','503','Blue Green — med','Сине-зеленый, ср. '),
	 ('#d1e2d7','504','Blue Green — vy lt','Сине-зеленый, оч. Св. '),
	 ('#418253','505','Jade','Нефрит'),
	 ('#166d92','517','Wedgwood — dk','Пыльно-синий, т. '),
	 ('#6b9cb9','518','Wedgwood — lt','Пыльно-синий, св. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#a8c6d8','519','Sky Blue','Небесно голубой'),
	 ('#4f6035','520','Fern Green — dk','Папоротниковый, т. '),
	 ('#93a181','522','Fern Green','Папоротниковый'),
	 ('#a5a888','523','Fern Green — lt','Папоротниковый, св. '),
	 ('#bec0a8','524','Fern Green — vy lt','Папоротниковый, оч. Св. '),
	 ('#504f50','535','Ash Grey — vy lt','Пепельный, оч. Св. '),
	 ('#f0e3d4','543','Beige Brown — ultra vy lt','Бежево-коричневый, ультра св. '),
	 ('#541244','550','Violet — vy dk','Фиолетовый, оч. Т. '),
	 ('#7b3f6c','552','Violet — med','Фиолетовый, ср. '),
	 ('#a772a4','553','Violet','Фиолетовый');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#ae99b1','554','Violet — lt','Фиолетовый, св. '),
	 ('#377557','561','Jade — vy dk','Нефрит, оч. Т. '),
	 ('#599b6d','562','Jade — med','Нефрит, ср. '),
	 ('#87c39e','563','Jade — lt','Нефрит, св. '),
	 ('#9cd0ab','564','Jade — vy lt','Нефрит, оч. Св. '),
	 ('#68772d','580','Moss Green — dk','Мох, т. '),
	 ('#9fa146','581','Moss Green','Мох'),
	 ('#70aeb4','597','Turquoise','Бирюзовый'),
	 ('#97ccca','598','Turquoise — lt','Бирюзовый, св. '),
	 ('#bf1c48','600','Cranberry — vy dk','Клюквенный, оч. Т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#d34067','601','Cranberry — dk','Клюквенный, т. '),
	 ('#ca0b51','602','Cranberry — med','Клюквенный, ср. '),
	 ('#ef7ba1','603','Cranberry','Клюквенный'),
	 ('#ec9ab9','604','Cranberry — lt','Клюквенный, св. '),
	 ('#faccdb','605','Cranberry — vy lt','Клюквенный, оч. Св. '),
	 ('#ea592c','606','Bright Orange Red','Яркий красно-оранжевый'),
	 ('#f06e46','608','Bright Orange','Ярко оранжевый'),
	 ('#806638','610','Drab Brown — vy dk','Тускло-коричневый, оч. Т. '),
	 ('#9e9072','611','Drab Brown — dk','Тускло-коричневый, т. '),
	 ('#917d4a','612','Drab Brown — med','Тускло-коричневый, ср. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#bcae83','613','Drab Brown — lt','Тускло-коричневый, св. '),
	 ('#8c593e','632','Desert Sand — ultra vy dk','Пустынного песка, ультра т. '),
	 ('#938962','640','Beige Grey — vy dk','Бежево-серый, оч. Т. '),
	 ('#bab599','642','Beige Grey — dk','Бежево-серый, т. '),
	 ('#d6d3c1','644','Beige Grey — med','Бежево-серый, ср. '),
	 ('#747e65','645','Beaver Grey — vy dk','Боброво-серый, оч. Т. '),
	 ('#97978e','646','Beaver Grey — dk','Боброво-серый, т. '),
	 ('#abafa3','647','Beaver Grey — med','Боброво-серый, ср. '),
	 ('#babfad','648','Beaver Grey — lt','Боброво-серый, св. '),
	 ('#d12627','666','Christmas Red — bright','Рождественский красный, яркий');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#eed7a1','676','Old Gold — lt','Старого золота, св. '),
	 ('#ede0ba','677','Old Gold — vy lt','Старого золота, оч. Св. '),
	 ('#af8334','680','Old Gold — dk','Старого золота, т. '),
	 ('#015731','699','Christmas Green','Рождественский зеленый'),
	 ('#2e9148','700','Christmas Green — bright','Рождественский зеленый, яркий'),
	 ('#007a3f','701','Christmas Green — lt','Рождественский зеленый, св. '),
	 ('#59a052','702','Kelly Green','Мутновато-зеленый'),
	 ('#81b85e','703','Chartreuse','Бледно-зеленый'),
	 ('#bad765','704','Chartreuse — bright','Бледно-зеленый, яркий'),
	 ('#e1e1d9','712','Cream','Кремовый');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#9f2d6f','718','Plum','Сливовый'),
	 ('#ec6810','720','Orange Spice — dk','Красновато-рыжеватый, т. '),
	 ('#e4752b','721','Orange Spice — med','Красновато-рыжеватый, ср. '),
	 ('#faa463','722','Orange Spice — lt','Красновато-рыжеватый, св. '),
	 ('#fad558','725','Topaz','Топаз'),
	 ('#ffe35f','726','Topaz — lt','Топаз, св. '),
	 ('#feee89','727','Topaz — vy lt','Топаз, оч. Св. '),
	 ('#ecbf3b','728','Topaz','Топаз'),
	 ('#cc993d','729','Old Gold — med','Старого золота, ср. '),
	 ('#746d2b','730','Olive Green — vy dk','Оливково-зеленый, оч. Т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#837d2f','731','Olive Green — dk','Оливково-зеленый, т. '),
	 ('#91852a','732','Olive Green','Оливково-зеленый'),
	 ('#a6a036','733','Olive Green — med','Оливково-зеленый, ср. '),
	 ('#d1c66d','734','Olive Green — lt','Оливково-зеленый, св. '),
	 ('#d9c38f','738','Tan — vy lt','Желто-коричневый, оч. Св. '),
	 ('#e5dab2','739','Tan — ultra vy lt','Желто-коричневый, ультра св. '),
	 ('#ff7600','740','Tangerine','Мандариновый'),
	 ('#f69726','741','Tangerine — med','Мандариновый, ср. '),
	 ('#ffc33a','742','Tangerine — lt','Мандариновый, св. '),
	 ('#ffda5a','743','Yellow — med','Желтый, ср. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#ffe276','744','Yellow — pale','Желтый, бледный'),
	 ('#ffeda9','745','Yellow — lt pale','Желтый, бледно св. '),
	 ('#f5f0df','746','Off White','Белесый'),
	 ('#d3e9e7','747','Sky Blue — vy lt','Небесно голубой, оч. Св. '),
	 ('#efc1aa','754','Peach — lt','Персиковый, св. '),
	 ('#eac0b4','758','Terra Cotta — vy lt','Терракотовый, оч. Св. '),
	 ('#e29690','760','Salmon','Лососевый'),
	 ('#f4c4c1','761','Salmon — lt','Лососевый, св. '),
	 ('#e9e9eb','762','Pearl Grey — vy lt','Жемчужно серый, оч. Св. '),
	 ('#f3f6d4','772','Yellow Green — vy lt','Желто-зеленый, оч. Св. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#ceddea','775','Baby Blue — vy lt','Нежно голубой, оч. Св. '),
	 ('#eeaeb0','776','Pink — med','Розовый, ср. '),
	 ('#8a373b','777','Raspberry — vy dk','Малина оч. Т'),
	 ('#ddb3b1','778','Antique Mauve — vy lt','Античный розовато-лиловый, оч. Св. '),
	 ('#6d5748','779','Cocoa — dk','Какао т. '),
	 ('#936626','780','Topaz — ultra vy dk','Топаз, ультра т. '),
	 ('#ba8225','781','Topaz — vy dk','Топаз, оч. Т. '),
	 ('#b38132','782','Topaz — dk','Топаз, т. '),
	 ('#d19d2f','783','Topaz — med','Топаз, ср. Т. '),
	 ('#161151','791','Cornflower Blue — vy dk','Васильковый, кобальтовый, оч. Т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#7971a0','792','Cornflower Blue — dk','Васильковый, кобальтовый, т. '),
	 ('#686d8d','793','Cornflower Blue — med','Васильковый, кобальтовый, ср. '),
	 ('#8ea7c0','794','Cornflower Blue — lt','Васильковый, кобальтовый, св. Т. '),
	 ('#181f66','796','Royal Blue — dk','Чисто синий, т. '),
	 ('#2c4180','797','Royal Blue','Чисто синий'),
	 ('#445997','798','Delft — dk','Фарфоровый, т. '),
	 ('#6e8db5','799','Delft — med','Фарфоровый, ср. '),
	 ('#c1d3df','800','Delft — pale','Фарфоровый, бледный'),
	 ('#63461f','801','Coffee Brown — dk','Кофейный, т. '),
	 ('#437490','806','Peacock Blue — dk','Переливчатый синий, т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#70a8b3','807','Peacock Blue','Переливчатый синий'),
	 ('#6c91c0','809','Delft','Фарфоровый'),
	 ('#91b4ce','813','Blue — lt','Синий, св. '),
	 ('#711f2e','814','Garnet — dk','Гранатовый, т. '),
	 ('#9d3030','815','Garnet — med','Гранатовый, ср. '),
	 ('#811024','816','Garnet','Гранатовый'),
	 ('#bd2e2e','817','Coral Red — vy dk','Кораллово красный, оч. Т. '),
	 ('#f9d6dd','818','Baby Pink','Нежно розовый'),
	 ('#fbe2df','819','Baby Pink — lt','Нежно розовый, св. '),
	 ('#190f60','820','Royal Blue — vy dk','Чисто синий, оч. Т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#e2dfd3','822','Beige Grey — lt','Бежево-серый, св. '),
	 ('#124477','823','Navy Blue — dk','Темно-синий, т. '),
	 ('#3b6292','824','Blue — vy dk','Синий, оч. Т. '),
	 ('#366390','825','Blue — dk','Синий, т. '),
	 ('#5a82a2','826','Blue — med','Синий, ср. '),
	 ('#b4d3e3','827','Blue — vy lt','Синий, оч. Св. '),
	 ('#cae2eb','828','Blue — ultra vy lt','Синий, ультра св. '),
	 ('#6f5422','829','Golden Olive — vy dk','Оливково-золотой, оч. Т. '),
	 ('#806c26','830','Golden Olive — dk','Оливково-золотой, т. '),
	 ('#957b2f','831','Golden Olive — med','Оливково-золотой, ср. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#b19a3f','832','Golden Olive','Оливково-золотой'),
	 ('#bfa43a','833','Golden Olive — lt','Оливково-золотой, св. '),
	 ('#cab751','834','Golden Olive — vy lt','Оливково-золотой, оч. Св. '),
	 ('#573c2a','838','Beige Brown — vy dk','Бежево-коричневый, оч. Т. '),
	 ('#684e37','839','Beige Brown — dk','Бежево-коричневый, т. '),
	 ('#977e65','840','Beige Brown — med','Бежево-коричневый, ср. '),
	 ('#b39f8c','841','Beige Brown — lt','Бежево-коричневый, св. '),
	 ('#cdb9a4','842','Beige Brown — vy lt','Бежево-коричневый, оч. Св. '),
	 ('#6c6e58','844','Beaver Grey — ultra dk','Боброво-серый, ультра т. '),
	 ('#775820','869','Hazelnut Brown — vy dk','Фундука, оч. Т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#043810','890','Pistachio Green — ultra dk','Фисташково зеленый, ультра т. '),
	 ('#ef4949','891','Carnation — dk','Гвоздичный, т. '),
	 ('#f85b64','892','Carnation — med','Гвоздичный, ср. '),
	 ('#fc6a84','893','Carnation — lt','Гвоздичный, св. '),
	 ('#f999a5','894','Carnation — vy lt','Гвоздичный, оч. Св. '),
	 ('#29542f','895','Hunter Green — vy dk','Защитный, грязновато зеленый, оч. Т. '),
	 ('#502f1b','898','Coffee Brown — vy dk','Кофейный, оч. Т. '),
	 ('#ee8593','899','Rose — med','Розы, ср. '),
	 ('#d45d28','900','Burnt Orange — dk','Оранжево-жженный, т. '),
	 ('#6b3b33','902','Garnet — vy dk','Гранатовый, оч. Т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#4f6c33','904','Parrot Green — vy dk','Зеленый попугаевый, оч. Т. '),
	 ('#759a3e','905','Parrot Green — dk','Зеленый попугаевый, т. '),
	 ('#82ae44','906','Parrot Green — med','Зеленый попугаевый, ср. '),
	 ('#a9c33e','907','Parrot Green — lt','Зеленый попугаевый, св. '),
	 ('#00793b','909','Emerald Green — vy dk','Изумрудный, оч. Т. '),
	 ('#008c4c','910','Emerald Green — dk','Изумрудный, т. '),
	 ('#40a756','911','Emerald Green — med','Изумрудный, ср. '),
	 ('#58a96b','912','Emerald Green — lt','Изумрудный, св. '),
	 ('#88c78d','913','Nile Green — med','Мутно-зеленый, ср. '),
	 ('#800137','915','Plum — dk','Сливовый, т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#832a58','917','Plum — med','Сливовый, ср. '),
	 ('#8c3b1a','918','Red Copper — dk','Красной меди, т. '),
	 ('#9b3b1b','919','Red Copper','Красной меди'),
	 ('#a74f2a','920','Copper — med','Медный, ср. '),
	 ('#c36b29','921','Copper','Медный'),
	 ('#d6834d','922','Copper — lt','Медный, св. '),
	 ('#42605c','924','Grey Green — vy dk','Серо-зеленый, оч. Т. '),
	 ('#789899','926','Grey Green — med','Серо-зеленый, ср. '),
	 ('#c5d2cf','927','Grey Green — lt','Серо-зеленый, св. '),
	 ('#e5eae9','928','Grey Green — vy lt','Серо-зеленый, оч. Св. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#435e67','930','Antique Blue — dk','Античный синий, т. '),
	 ('#678997','931','Antique Blue — med','Античный синий, ср. '),
	 ('#8faeb9','932','Antique Blue — lt','Античный синий, св. '),
	 ('#4d4c34','934','Black Avocado Green — dk','Черно-зеленого авокадо, т. '),
	 ('#4b5035','935','Black Avocado Green — med','Черно-зеленого авокадо, ср. '),
	 ('#5d5c2b','936','Avocado Green — vy dk','Авокадо, оч. Т. '),
	 ('#4f5925','937','Avocado Green — med','Авокадо, ср. '),
	 ('#3b2811','938','Coffee Brown — ultra dk','Кофейный, ультра т. '),
	 ('#02101c','939','Navy Blue — vy dk','Темно-синий, оч. Т. '),
	 ('#009a7b','943','Aquamarine — med','Аквамарин, ср. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#e3be8e','945','Tawny','Рыжевато-коричневый'),
	 ('#e15729','946','Burnt Orange — med','Оранжево-жженный, ср. '),
	 ('#f26922','947','Burnt Orange','Оранжево-жженный'),
	 ('#feebe2','948','Peach — vy lt','Персиковый, оч. Св. '),
	 ('#e7ceb9','950','Desert Sand — lt','Пустынного песка, св. '),
	 ('#f2e0ce','951','Tawny — lt','Рыжевато-коричневый, св. '),
	 ('#abd58b','954','Nile Green','Мутно-зеленый'),
	 ('#b4e8b3','955','Nile Green — lt','Мутно-зеленый, св. '),
	 ('#ff7a90','956','Geranium','Герань'),
	 ('#f9afb7','957','Geranium — pale','Герань, бледный');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#51c0bb','958','Seagreen — dk','Морской воды, т. '),
	 ('#8fd3d4','959','Seagreen — med','Морской воды, ср. '),
	 ('#df6877','961','Dusty Rose — dk','Пыльной розы, т. '),
	 ('#f08d9f','962','Dusty Rose — med','Пыльной розы, ср. '),
	 ('#fad0d5','963','Dusty Rose — ultra vy lt','Пыльной розы, очень св. '),
	 ('#9cd3cc','964','Seagreen — lt','Морской воды, св. '),
	 ('#bbd7ae','966','Baby Green — med','Нежно зеленый, ср. '),
	 ('#fbdbcd','967','Apricot — vy lt','Абрикосовый оч. Св. '),
	 ('#ff781e','970','Pumpkin — bright','Тыквенный, яркий'),
	 ('#fc7e0c','971','Pumpkin','Тыквенный');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#ffb401','972','Canary — deep','Канареечный, глубокий'),
	 ('#ffe21a','973','Canary — bright','Канареечный, яркий'),
	 ('#945c2d','975','Golden Brown — dk','Золотисто-коричневый, т. '),
	 ('#e6973f','976','Golden Brown — med','Золотисто-коричневый, ср. '),
	 ('#e59034','977','Golden Brown — lt','Золотисто-коричневый, св. '),
	 ('#1f561f','986','Forest Green — vy dk','Зеленый лесной, оч. Т. '),
	 ('#568357','987','Forest Green — dk','Зеленый лесной, т. '),
	 ('#76996c','988','Forest Green — med','Зеленый лесной, ср. '),
	 ('#87a462','989','Forest Green','Зеленый лесной'),
	 ('#176a59','991','Aquamarine — dk','Аквамарин, т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#6cbfa8','992','Aquamarine — lt','Аквамарин, св. '),
	 ('#8ec2b3','993','Aquamarine — vy lt','Аквамарин, оч. Св. '),
	 ('#0064b0','995','Electric Blue — dk','Электрик синий, т. '),
	 ('#57baf5','996','Electric Blue — med','Электрик синий, ср. '),
	 ('#635f2f','3011','Khaki Green — dk','Хаки, т. '),
	 ('#9b9648','3012','Khaki Green — med','Хаки, ср. '),
	 ('#999c6c','3013','Khaki Green — lt','Хаки, св. '),
	 ('#3b2e08','3021','Brown Grey — vy dk','Коричнево-серый, оч. Т. '),
	 ('#938e6e','3022','Brown Grey — med','Коричнево-серый, ср. '),
	 ('#b2ae95','3023','Brown Grey — lt','Коричнево-серый, св. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#dcdcd7','3024','Brown Grey — vy lt','Коричнево-серый, оч. Св. '),
	 ('#442e10','3031','Mocha Brown — vy dk','Мокка, оч. Т. '),
	 ('#ada183','3032','Mocha Brown — med','Мокка, ср. '),
	 ('#d7d0c2','3033','Mocha Brown — vy lt','Мокка, оч. Св. '),
	 ('#966e6e','3041','Antique Violet — med','Антично фиолетовый, ср. '),
	 ('#ccc1d0','3042','Antique Violet — lt','Антично фиолетовый, св. '),
	 ('#b19563','3045','Yellow Beige — dk','Желтовато-бежевый, т. '),
	 ('#ccbc7d','3046','Yellow Beige — med','Желтовато-бежевый, ср. '),
	 ('#ececd2','3047','Yellow Beige — lt','Желтовато-бежевый, св. '),
	 ('#6d6f42','3051','Green Grey — dk','Серо-зеленый, т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#899770','3052','Green Grey — med','Серо-зеленый, ср. '),
	 ('#bac28b','3053','Green Grey','Серо-зеленый'),
	 ('#cda072','3064','Desert Sand','Пустынного песка'),
	 ('#e3e6dc','3072','Beaver Grey — vy lt','Боброво-серый, оч. Св. '),
	 ('#fff3ad','3078','Golden Yellow — vy lt','Желтый золотой, оч. Св. '),
	 ('#c6d3e1','3325','Baby Blue — lt','Нежно голубой, св. '),
	 ('#f7b4b7','3326','Rose — lt','Розы, св. '),
	 ('#c36154','3328','Salmon — dk','Лососевый, т. '),
	 ('#f38351','3340','Apricot — med','Абрикосовый, ср. '),
	 ('#fbbe9d','3341','Apricot','Абрикосовый');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#486131','3345','Hunter Green — dk','Защитный, грязновато зеленый, т. '),
	 ('#6a823d','3346','Hunter Green','Защитный, грязновато зеленый'),
	 ('#78983b','3347','Yellow Green — med','Желто-зеленый, ср. '),
	 ('#e3ee9f','3348','Yellow Green — lt','Желто-зеленый, св. '),
	 ('#b95569','3350','Dusty Rose — ultra dk','Пыльной розы, ультра т. '),
	 ('#e3a5aa','3354','Dusty Rose — lt','Пыльной розы, св. '),
	 ('#2e3d1a','3362','Pine Green — dk','Сосновый, т. '),
	 ('#72885f','3363','Pine Green — med','Сосновый, ср. '),
	 ('#85905c','3364','Pine Green','Сосновый'),
	 ('#2d1705','3371','Black Brown','Черно-коричневый');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#b34e8c','3607','Plum — lt','Сливовый, св. '),
	 ('#c07ba3','3608','Plum — vy lt','Сливовый, оч. Св. '),
	 ('#e9afd3','3609','Plum — ultra lt','Сливовый, ультра св. '),
	 ('#7d3248','3685','Mauve — vy dk','Розовато-лиловый, оч. Т. '),
	 ('#c2596d','3687','Mauve','Розовато-лиловый'),
	 ('#e6849a','3688','Mauve — med','Розовато-лиловый, ср. '),
	 ('#e8b9c5','3689','Mauve — lt','Розовато-лиловый, св. '),
	 ('#f65d5b','3705','Melon — dk','Дыни, т. '),
	 ('#ff988e','3706','Melon — med','Дыни, ср. '),
	 ('#fcbbc1','3708','Melon — lt','Дыни, св. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#db7d73','3712','Salmon — med','Лососевый, ср. '),
	 ('#fcdcda','3713','Salmon — vy lt','Лососевый, оч. Св. '),
	 ('#fcb1ba','3716','Dusty Rose — vy lt','Пыльной розы, оч. Св. '),
	 ('#aa5048','3721','Shell Pink — dk','Розовых ракушек, т. '),
	 ('#a45d55','3722','Shell Pink — med','Розовых ракушек, ср. '),
	 ('#874c49','3726','Antique Mauve — dk','Античный розовато-лиловый, т. '),
	 ('#e6bcc3','3727','Antique Mauve — lt','Античный розовато-лиловый, св. '),
	 ('#c65a6b','3731','Dusty Rose — vy dk','Пыльной розы, оч. Т. '),
	 ('#eda6ac','3733','Dusty Rose','Пыльной розы'),
	 ('#72535a','3740','Antique Violet — dk','Антично фиолетовый, т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#c7bac7','3743','Antique Violet — vy lt','Антично фиолетовый, оч. Св. '),
	 ('#8572a4','3746','Blue Violet — dk','Сине-фиолетовый, т. '),
	 ('#bcc0d8','3747','Blue Violet — vy lt','Сине-фиолетовый, оч. Св. '),
	 ('#444d58','3750','Antique Blue — vy dk','Античный синий, оч. Т. '),
	 ('#bbc8d6','3752','Antique Blue — vy lt','Античный синий, оч. Св. '),
	 ('#ccd5da','3753','Antique Blue — ultra vy lt','Античный синий, ультра св. '),
	 ('#9fbbd5','3755','Baby Blue','Нежно голубой'),
	 ('#e8edf3','3756','Baby Blue — ultra vy lt','Нежно голубой, ультра св. '),
	 ('#4f819d','3760','Wedgwood — med','Пыльно-синий, ср. (гжель)'),
	 ('#b8dae9','3761','Sky Blue — lt','Небесно голубой, св. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#296e87','3765','Peacock Blue — vy dk','Переливчатый синий, оч. Т. '),
	 ('#7cbec6','3766','Peacock Blue — lt','Переливчатый синий, св. '),
	 ('#6b8084','3768','Grey Green — dk','Серо-зеленый'),
	 ('#f8eedc','3770','Tawny — vy lt','Рыжевато-коричневый, оч. Св. '),
	 ('#e8b58f','3771','Terra Cotta — ultra vy lt','Терракотовый, ультра оч. Св. '),
	 ('#b8846c','3772','Desert Sand — vy dk','Пустынного песка, оч. Т. '),
	 ('#d8b39d','3773','Desert Sand — med','Пустынного песка, ср. '),
	 ('#f6e1d0','3774','Desert Sand — vy lt','Пустынного песка, оч. Св. '),
	 ('#c27d45','3776','Mahogany — lt','Красного дерева, св. '),
	 ('#892b21','3777','Terra Cotta — vy dk','Терракотовый, оч. Т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#c4856f','3778','Terra Cotta — lt','Терракотовый, св. '),
	 ('#f2c6b8','3779','Terra Cotta — ultra vy lt','Терракотовый, ультра св. '),
	 ('#5c4c2d','3781','Mocha Brown — dk','Мокка, т. '),
	 ('#d2caba','3782','Mocha Brown — lt','Мокка, св. '),
	 ('#605b45','3787','Brown Grey — dk','Коричнево-серый, т. '),
	 ('#978266','3790','Beige Grey — ultra dk','Бежево-серый, ультра т. '),
	 ('#2f3b36','3799','Pewter Grey — vy dk','Оловянно серый, оч. Т. '),
	 ('#e65952','3801','Christmas Red — lt','Рождественский красный, св. '),
	 ('#6f2e35','3802','Antique Mauve — vy dk','Античный розовато-лиловый, оч. Т. '),
	 ('#863248','3803','Mauve — dk','Розовато-лиловый, т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#c33c62','3804','Cyclamen Pink — dk','Розового цикламена, т. '),
	 ('#ce507f','3805','Cyclamen Pink','Розового цикламена'),
	 ('#f19ac2','3806','Cyclamen Pink — lt','Розового цикламена, св. '),
	 ('#073563','3807','Cornflower Blue','Васильковый, кобальтовый'),
	 ('#0c464b','3808','Turquoise — ultra vy dk','Бирюзовый, ультра т. '),
	 ('#1c869b','3809','Turquoise — vy dk','Бирюзовый, оч. Т. '),
	 ('#4fa1a9','3810','Turquoise — dk','Бирюзовый, т. '),
	 ('#c4e7e8','3811','Turquoise — vy lt','Бирюзовый, оч. Св. '),
	 ('#008679','3812','Seagreen — vy dk','Морской воды, оч. Т. '),
	 ('#b8cebe','3813','Blue Green — lt','Сине-зеленый, св. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#3f8878','3814','Aquamarine','Аквамарин'),
	 ('#538a6d','3815','Celadon Green — dk','Серовато-зеленый, т. '),
	 ('#699d85','3816','Celadon Green','Серовато-зеленый'),
	 ('#a6c5b4','3817','Celadon Green — lt','Серовато-зеленый, св. '),
	 ('#005d2e','3818','Emerald Green — ultra vy dk','Изумрудный, ультра т. '),
	 ('#d2d057','3819','Moss Green — lt','Мох, св. '),
	 ('#ddb442','3820','Straw — dk','Соломенный, т. '),
	 ('#e2b73a','3821','Straw','Соломенный'),
	 ('#f1d863','3822','Straw — lt','Соломенный, св. '),
	 ('#fffcdc','3823','Yellow — ultra pale','Желтый, ультра бледный');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#fbccb8','3824','Apricot — lt','Абрикосовый, св. '),
	 ('#fdc391','3825','Pumpkin — pale','Тыквенный, бледный'),
	 ('#c38c55','3826','Golden Brown','Золотовато-коричневый'),
	 ('#e8aa5f','3827','Golden Brown — pale','Золотовато-коричневый, бледный'),
	 ('#af8846','3828','Hazelnut Brown','Фундука'),
	 ('#a47829','3829','Old Gold — vy dk','Старого золота, оч. Т. '),
	 ('#b97161','3830','Terra Cotta','Терракотовый'),
	 ('#b33034','3831','Raspberry — dk','Малиновый, т. '),
	 ('#b33034','3832','Raspberry — med','Малиновый, ср. '),
	 ('#e8868c','3833','Raspberry — lt','Малиновый, св. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#642441','3834','Grape — dk','Красного винограда, т. '),
	 ('#784775','3835','Grape — med','Красного винограда, ср. '),
	 ('#c1aec2','3836','Grape — lt','Красного винограда, св. '),
	 ('#7c4087','3837','Lavender — ultra dk','Лаванда, ультра тёмный'),
	 ('#62669a','3838','Lavender Blue — dk','Лавандово-синий, т. '),
	 ('#94a8c9','3839','Lavender Blue — med','Лавандово-синий, ср. '),
	 ('#c1d4ec','3840','Lavender Blue — lt','Лавандово-синий, св. '),
	 ('#cbdde7','3841','Baby Blue — pale','Нежно голубой, бледный'),
	 ('#12557e','3842','Wedgwood — dk','Пыльно-синий, т. '),
	 ('#0095d3','3843','Electric Blue','Волнующе синий');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#0095d3','3844','Bright Turquoise — dk','Ярко-бирюзовый, т. '),
	 ('#01cbec','3845','Bright Turquoise — med','Ярко-бирюзовый, ср. '),
	 ('#63d3e1','3846','Bright Turquoise — lt','Ярко-бирюзовый, св. '),
	 ('#00604e','3847','Teal Green — dk','Цвет рабочего стола Windows, т. '),
	 ('#42917f','3848','Teal Green — med','Цвет рабочего стола Windows, ср. '),
	 ('#6eb2a7','3849','Teal Green — lt','Цвет рабочего стола Windows, св. '),
	 ('#08926f','3850','Bright Green — dk','Ярко-зеленый, т. '),
	 ('#56b69c','3851','Bright Green — lt','Ярко-зеленый, св. '),
	 ('#cc972b','3852','Straw — vy dk','Соломенный, оч. Т. '),
	 ('#fc9749','3853','Autumn Gold — dk','Золотой осенний, т. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#f7b25c','3854','Autumn Gold — med','Золотой осенний, ср. '),
	 ('#f7ca84','3855','Autumn Gold — lt','Золотой осенний, св. '),
	 ('#ebbc9a','3856','Mahogany — ultra vy lt','Красного дерева, ультра св. '),
	 ('#804133','3857','Rosewood — dk','Розового дерева, т. '),
	 ('#8d5745','3858','Rosewood — med','Розового дерева, ср. '),
	 ('#b68472','3859','Rosewood — lt','Розового дерева, св. '),
	 ('#947974','3860','Cocoa','Какао'),
	 ('#9e887f','3861','Cocoa — lt','Какао, св. '),
	 ('#845f2e','3862','Mocha Beige — dk','Темно-коричневый бежевый, т. '),
	 ('#a4866c','3863','Mocha Beige — med','Темно-коричневый бежевый, ср. ');
INSERT INTO Colors (color,name, name_color_eng,name_color_ru) VALUES
	 ('#c9af93','3864','Mocha Beige — lt','Темно-коричневый бежевый, св. '),
	 ('#faf9f5','3865','Winter White','Снежно белый'),
	 ('#e7e5dd','3866','Mocha Brown — ultra vy lt','Мокка, ультра св. ');

INSERT INTO Users (email,password,is_activated, activation_link, created_at,updated_at) VALUES
	 ('admin@mail.ru','admin', false, '', '2020-01-01','2020-01-01')