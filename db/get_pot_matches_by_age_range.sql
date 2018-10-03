select *, Extract(Year from age( birth_date)) AS current_age
from limber_user
where Extract(Year from age( birth_date))>= $1 AND Extract(Year from age( birth_date)) <= $2 AND gender <> $3;