INSERT INTO users 
(first_name, last_name, gender, hair_color, eye_color, hobby, birthday_day, birthday_month, birthday_year, auth_id)
VALUES
('', '', '', '', '', '', '', '', '', $1)
RETURNING *;