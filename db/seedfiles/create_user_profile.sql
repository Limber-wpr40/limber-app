    create table limber_profile (
    	profile_id Serial PRIMARY KEY,
    	user_id INTEGER,
    about text,
    job text,
    company text,
    school text,
    anthem text,
    show_age boolean,
    show_distance boolean
    );