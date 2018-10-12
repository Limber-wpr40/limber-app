select limber_message.*, limber_user.user_image 
from limber_message
Join limber_user
On limber_message.sender_id = limber_user.user_id
where sender_id = $1 And recv_id = $2 OR recv_id = $1 And sender_id = $2;