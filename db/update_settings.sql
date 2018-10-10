UPDATE limber_settings SET min_age = $2, max_age = $3,
max_distance = $4 where user_id  = $1
returning *;