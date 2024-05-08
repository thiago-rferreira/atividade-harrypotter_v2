# Mundo de Harry Potter 🧙🏼🪄

Bem-vindo ao Mundo de Harry Potter - Backend! Este projeto é parte de um desafio de desenvolvimento backend inspirado no mundo mágico criado por J.K. Rowling. Aqui, você encontrará um backend simples desenvolvido em Node.js com Express e PostgreSQL, permitindo operações CRUD completas para bruxos e varinhas.

![alt text](src/images/harry-potter.png)

## Funcionalidades🪄

- Criação, leitura, atualização e exclusão (CRUD) de bruxos.
- Criação, leitura, atualização e exclusão (CRUD) de varinhas.
- Rota de teste que retorna uma frase aleatória do filme Harry Potter ou um feitiço.

## Tecnologias Utilizadas🪄

- Node.js
- Express
- PostgreSQL
- dotenv


## Como Usar🪄

1. Clone este repositório:

```
git clone https://github.com/thiago-rferreira/atividade-harrypotter_v2.git
```

2. Instale as dependências:

```
cd harry-potter-backend
npm install
```

3. Configure o banco de dados PostgreSQL:

   - Certifique-se de ter o PostgreSQL instalado em sua máquina.
   - Crie um banco de dados chamado `harrypotter`.
   - Execute o script fornecido em `database.sql` para criar as tabelas `bruxos` e `varinhas`.

4. Configure as credenciais do banco de dados:

   - No arquivo `index.js`, altere as informações de conexão do pool do PostgreSQL para corresponder às suas credenciais.

5. Inicie o servidor:

```
npm start
```

6. Acesse a API em `http://localhost:3003`.

## Rotas 🪄

- `GET /bruxos`: Retorna todos os bruxos.
- `POST /bruxos`: Cria um novo bruxo.
- `PUT /bruxos/:id`: Atualiza um bruxo existente.
- `DELETE /bruxos/:id`: Deleta um bruxo existente.
- `GET /varinhas`: Retorna todas as varinhas.
- `POST /varinhas`: Cria uma nova varinha.
- `PUT /varinhas/:id`: Atualiza uma varinha existente.
- `DELETE /varinhas/:id`: Deleta uma varinha existente.
- `GET /`: Retorna uma frase aleatória do filme Harry Potter ou um feitiço.


## Estrutura de pastas 🪄
![alt text](src/images/pastas.png)

A estruturação de pastas em um projeto de software é crucial para a organizabilidade, escalabilidade e manutenção do código. Uma estrutura bem planejada permite que desenvolvedores encontrem facilmente o código responsável por funcionalidades específicas, facilita a implementação de mudanças e ajuda na integração e no teste de novas funcionalidades. No caso de uma API construída usando Node.js e Express, as pastas comumente incluem routes, controllers, config, e outras conforme a necessidade do projeto. Aqui está como essas partes se comunicam e qual a função de cada uma:
1. /config
   - Armazena arquivos de configuração, como conexões de banco de dados.
   - `dbConfig.js` é um exemplo, onde você configura e exporta o pool de conexões PostgreSQL para ser usado em outras partes do aplicativo.

2. /controllers
   - Contém lógica de negócios para manipular as requisições e respostas.
   - Os controllers importam configurações de `/config` para acessar o banco de dados.
   - Eles definem funções para cada operação CRUD, que são então exportadas para serem usadas pelas rotas.

3. /routes
   - Define as rotas HTTP que o aplicativo irá responder.
   - As rotas utilizam os controllers para encaminhar a lógica de processamento das requisições.
   - Cada rota especifica um caminho e associa este caminho a uma função específica em um controller.

4. index.js
   - É o ponto de entrada do aplicativo, onde o servidor é configurado e iniciado.
   - Utiliza as definições de rotas para encaminhar as requisições para os handlers apropriados.
   - Carrega configurações globais, como middlewares e variáveis de ambiente.
As pastas e arquivos interagem principalmente através de importações e exportações, permitindo que funcionalidades específicas sejam modularizadas e gerenciadas de forma independente. 
Esta organização não só mantém o código limpo e legível, mas também facilita a expansão e manutenção ao permitir que novos desenvolvedores compreendam rapidamente a estrutura e funcionamento do projeto.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto.

### Aviso Importante

Os dados de acesso ao banco de dados estão expostos neste projeto, pois é destinado a fins educacionais como projeto de estudo para alunos. Certifique-se de não utilizar informações sensíveis neste contexto.

