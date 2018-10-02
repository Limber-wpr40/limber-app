SELECT lu.*, lp.*, ls.*
FROM limber_User as lu
 JOIN limber_profile as lp ON 
 lp.user_id = lu.user_id 
 JOIN limber_settings as ls ON 
 lu.user_id = ls.user_id
where lu.user_id = $1;