UPDATE limber_profile SET about = $2, job = $3, company = $4, school = $5, anthem = $6, show_age = $7, show_distance = $8 WHERE userid = $1
returning *;