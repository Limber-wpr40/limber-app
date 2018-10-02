CREATE TABLE limber_settings
(
    settings_id Serial PRIMARY KEY,
    user_id integer,
    locale text,
    display_gender text,
    max_distance integer,
    min_age integer,
    max_age integer,
    show_me boolean,
    share_my_feed boolean,
    email_notifications boolean,
    push_notificatios boolean
);