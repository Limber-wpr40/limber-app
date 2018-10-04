
Create Table limber_likes (likes_id SERIAL PRIMARY KEY, user_id INTEGER, match_id INTEGER, super_like Boolean);

insert into user_likes (user_id,match_id, super_like)
values
(176,179,true),
(176, 54, false),
(57, 45, false),
(161, 69, false),
(161, 153, false),
(161, 149, false),
(161, 191, false),
(161, 25, false),
(57, 47, true ),
(184, 181, true),
(181, 184, true),
(181, 185, false),
(54, 176, false),
(140, 69, false),
(140, 153, false),
(140, 149, false),
(140, 191, false),
(140, 25, false),
(140, 32, false),
(69, 140, false),
(69, 161, false),
(69, 146, true);
