SELECT about,
    job ,
    company,
    school,
    anthem,
    show_age,
    show_distance
FROM limber_user
where user_id = $1;