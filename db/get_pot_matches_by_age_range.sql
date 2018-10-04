select *, Extract(Year from age( birth_date)) AS current_age
from limber_user
where Extract(Year from age( birth_date))>= 26 AND Extract(Year from age( birth_date)) <= 36 AND gender <> 'Female';