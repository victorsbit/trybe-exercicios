-- inner join

# 1

SELECT a.actor_id, a.first_name, f.film_id
FROM actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

# 2

SELECT s.first_name, s.last_name, a.address
FROM staff AS s INNER JOIN address AS a
ON s.address_id = a.address_id;

# 3

SELECT 
    c.customer_id,
    c.first_name,
    c.email,
    c.address_id,
    a.address
FROM
    customer AS c
        INNER JOIN
    address AS a ON c.address_id = a.address_id
LIMIT 100;

# 4

SELECT 
    c.first_name,
    c.email,
    c.address_id,
    a.address,
    a.district
FROM
    customer AS c
        INNER JOIN
    address AS a ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE 'rene%';

# 5

SELECT 
    c.first_name, COUNT(a.address)
FROM
    customer AS c
        INNER JOIN
    address AS a ON c.address_id = a.address_id
WHERE
    c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC;

# 6

SELECT 
    s.first_name, s.last_name, AVG(p.amount)
FROM
    staff AS s
        INNER JOIN
    payment AS p ON s.staff_id = p.staff_id
GROUP BY s.staff_id;
