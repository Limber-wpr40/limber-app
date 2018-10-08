CREATE TABLE limber_message
(
    message_id SERIAL PRIMARY KEY,
    create_date DATE,
    sender_id Integer,
    recv_id Integer,
    msg_body TEXT
);

INSERT INTO limber_message2
    ( sender_id,recv_id,msg_body)
VALUES
(176, 54, 'What you up to?'),
(54, 176,'just chillin in my room. What you doin?'),
(140, 69,'What you up to?'),
(176, 54,'heading to the football game.'),
(176, 54,'Want to catch lunch with me today?'),
(54, 176,'Sure, where are you thinking to meet?'),
(54, 176,'What time you thinking about? I can meet you after 12:30'),
(69, 140,'just chillin in my room. What you doin?'),
(140, 69,'heading to the football game.'),
(140, 69,'Want to catch lunch with me today?'),
(176, 54,'Mickey D for the value meal. I think that is a safe place to meet.'),
(69, 140,'Sure, where are you thinking to meet?'),
(140, 69,'Mickey D for the value meal. I think that is a safe place to meet.'),
(69, 140,'What time you thinking about? I can meet you after 12:30'),
(176, 54,'See you there at 12:30'),
(54,176,'See you!'),
(176,54,'Thanks for lunch. it was fun!');
