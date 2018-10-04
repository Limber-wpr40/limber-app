select *
from limber_message
where sender_id = $1 And recv_id = $2 OR recv_id = $1 And sender_id = $2;