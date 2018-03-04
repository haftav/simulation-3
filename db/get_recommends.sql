select * from users 
where id not in (select friend_id from friends where id = $1) and id != $1