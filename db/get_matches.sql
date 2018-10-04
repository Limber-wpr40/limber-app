select limber_likes.user_id, limber_likes.match_id, limber_user.user_image from limber_likes
Inner Join limber_likes as likes_1
ON (limber_likes.match_id = likes_1.user_id)
AND (limber_likes.user_id = likes_1.match_id)
INNER Join limber_user
On (limber_likes.match_id = limber_user.user_id)
where limber_likes.user_id = $1
;