-- string manipulation

SELECT UCASE('trybe');

SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

SELECT CHAR_LENGTH('Uma frase qualquer');

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

-- flow control

SELECT film_id, title,
IF (title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme')
AS 'conheço o filme?'
FROM film;

SELECT title, rating,
	CASE 
		WHEN rating = 'G' THEN "Livre para todos"
        WHEN rating = 'PG' THEN "Não recomendado para menores de 10 anos"
        WHEN rating = 'PG-13' THEN "Não recomendado para menores de 13 anos"
        WHEN rating = 'R' THEN "Não recomendado para menores de 17 anos"
		ELSE 'Proibido para menores de idade'
	END AS 'público-alvo'
FROM film;
