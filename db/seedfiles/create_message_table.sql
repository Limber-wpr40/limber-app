CREATE TABLE limber_message (message_id SERIAL PRIMARY KEY, create_date DATE, sender_id Integer, recv_id Integer, msg_body TEXT);

INSERT INTO limber_message (create_date, sender_id,recv_id,msg_body)
VALUES

('9/22/2018', 176, 54, 'What you up to?'),
('9/22/2018', 54, 176, 'just chillin in my room. What you doin?'),
('9/22/2018', 176, 54, 'heading to the football game.'),
('9/23/2018', 176, 54, 'Want to catch lunch with me today?'),
('9/23/2018', 54, 176, 'Sure, where are you thinking to meet?'),
('9/23/2018', 176, 54, 'Mickey D for the value meal. I think that is a safe place to meet.'),
('9/23/2018', 54, 176, 'What time you thinking about? I can meet you after 12:30'),
('9/13/2018', 140, 69, 'What you up to?'),
('9/13/2018', 69, 140, 'just chillin in my room. What you doin?'),
('9/13/2018', 140, 69, 'heading to the football game.'),
('9/15/2018', 140, 69, 'Want to catch lunch with me today?'),
('9/15/2018', 69, 140, 'Sure, where are you thinking to meet?'),
('9/15/2018', 140, 69, 'Mickey D for the value meal. I think that is a safe place to meet.'),
('9/15/2018', 69, 140, 'What time you thinking about? I can meet you after 12:30');
