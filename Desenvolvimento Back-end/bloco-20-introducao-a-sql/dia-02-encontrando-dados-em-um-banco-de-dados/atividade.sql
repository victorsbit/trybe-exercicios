1 Eu quero somente os nomes dos livros cadastrados na biblioteca;
R: SELECT nome FROM faculdade.biblioteca;

2 Eu quero saber quantos livros temos cadastrados em nossa biblioteca;
R: SELECT COUNT(nome) FROM faculdade.biblioteca;

3 Eu quero uma lista com 2 livros e suas informações, mas eu não quero o livro 'Um livro do Ano' e 'Novas conquistas novas responsabilidades';
R: SELECT * FROM faculdade.biblioteca LIMIT 4 OFFSET 2;

4 Quero os livros mais recentes primeiro, e também em ordem alfabética;
R: SELECT * FROM faculdade.biblioteca ORDER BY ano_lancamento ASC, nome ASC;

5 Eu quero todas as informações do livro com maior estoque na biblioteca. Somente o com o maior estoque;
R: SELECT * FROM faculdade.biblioteca ORDER BY quantidade DESC LIMIT 1;

6 Eu quero criar uma lista com os 4 livros mais vendidos. Como poderia encontrar isso?
R: SELECT nome FROM faculdade.biblioteca ORDER BY quantidade DESC;