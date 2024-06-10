# jira-automacao-grp
<h1>Automação de Criação de Itens no Jira</h1>
<h2>Descrição</h2>
<h3>Criação de Histórias</h3>
O sistema serve para criar Histórias e SubTarefas dentro das Histórias. A criação é a partir de uma lista de objetos, como no exemplo a seguir:

![image](https://github.com/DiogoAAbreu/jira-automacao-grp/assets/102710131/b95ba8ea-a023-4027-a0ce-6de96a9c9823)

A extrutura acima mostra as propriedades que irão servir para a criação das Storys. A propriedade "descricao" vai preencher o Campo resumo no jira, o valor de cada Etapa vai ser utilizado para preencher os Campos Customizados dentro de cada História, jutamente com o número do processo que é a propriedade "item":

![image](https://github.com/DiogoAAbreu/jira-automacao-grp/assets/102710131/524bc2b3-c918-49a6-9b63-6c0958ed61a9)

O resultado final de cada História criada fica como a imagem acima.

<h3>Criação de Subtarefas</h3>
Para criar Subtarefas é necessário ter o código da História em que você deseja que as Subtarefas sejam criadas, por exemplo: IVJDF-818.
Caso queira criar em mais de uma story, pode inserir os códigos correspondente a storys que você deseja que as subtarefas sejam criadas dentro do arquivo data.js, na variável "storys":

![image](https://github.com/DiogoAAbreu/jira-automacao-grp/assets/102710131/354f79b7-93e5-4a7d-aba2-396959e06cc0)

Todas as Subtarefas que deseja criar, precisa ser inserida dentro da variável subtasks, que se encontra dentro do arquivo data.js:

![image](https://github.com/DiogoAAbreu/jira-automacao-grp/assets/102710131/96d50a62-60c5-4fa2-a952-b6b79ce35fa5)

<h2>Como utilizar?</h2>
Para a ultilização, é necessario que você faça um clone deste repositorio em sua máquina, crie um arquivo data.js com a seguinte estrutura: 

![image](https://github.com/DiogoAAbreu/jira-automacao-grp/assets/102710131/7ae59e5b-0eda-442d-a97c-a4f6466a19e1)

Após isso, no console, digite "npm i", para instalar todas as bibliotecas necessárias para utilização.

