SELECT 'This is SQL Exercise, Practice and Solution' AS only_column;

SELECT 1, 2, 3;

SELECT 10+15;

SELECT 2 * (2 + 5);

SELECT * FROM Scientists;

SELECT name AS nome_do_projeto, hours AS tempo_de_trabalho FROM Projects;

SELECT name FROM Scientists ORDER BY name ASC;

SELECT name FROM Projects ORDER BY name DESC;

SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído.') AS string FROM Projects;

SELECT * FROM Projects ORDER BY hours DESC LIMIT 3;

SELECT DISTINCT project FROM AssignedTo;

SELECT * FROM Projects ORDER BY hours DESC LIMIT 1;

SELECT * FROM Projects ORDER BY hours LIMIT 1 OFFSET 1;

SELECT * FROM Projects ORDER BY hours LIMIT 5;

-- não consegui converter
SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientists.') AS number_of_scientists FROM Scientists;