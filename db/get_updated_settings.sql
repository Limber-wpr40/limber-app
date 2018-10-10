SELECT lu.user_id,lu.first_name,lu.email,lu.gender,lu.phone,lu.birth_date,lu.user_image, ls.*,Extract(Year from age( birth_date)) AS current_age
FROM limber_User as lu
    JOIN limber_settings as ls ON 
 lu.user_id = ls.user_id
where lu.user_id = $1;