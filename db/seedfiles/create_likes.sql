
Create Table user_likes (likdes_id SERIAL PRIMARY KEY, user_id INTEGER, match_id INTEGER, super Boolean);

insert into user_likes (user_id,match_id, super)
values
(176,179,true),
(176, 54, false),
(57, 45, false),
(57, 47, true ),
(184, 181, true),
(181, 184, true),
(181, 185, false),
(54, 176, false),
(140, 69, false),
(69, 140, false),
(69, 146, true);
