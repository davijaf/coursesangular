# CourseManager

Este repositório contém o código fonte de uma SPA (Single Page Application) desenvolvida com Angular.
Contém também um exemplo de um servidor criado com Node.js e Express.

O front-end foi desenvolvido em [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.
O objetivo desta aplicação é fornecer uma listagem de cursos e detalhes de cada curso.

## Recursos do back-end
* Endpoints para CRUD de cursos
* Utilização de CORS para permitir acesso de origens diferentes
* Utilização de Body Parser para lidar com requisições e respostas em formato JSON

## Instalação do back-end
1. Faça um clone do repositório: git clone https://github.com/davijaf/coursesangular.git
2. Acesse a pasta do projeto: cd courseangular/assets/server
3. Instale as dependências: npm install
4. Inicie o servidor: npm start

## Utilização do back end
Abra o seu navegador e acesse http://localhost:3100/api/courses para acessar a lista de cursos.

As seguintes operações estão disponíveis:

* GET http://localhost:3100/api/courses: Retorna a lista de cursos
* POST http://localhost:3100/api/courses: Adiciona um novo curso à lista
* PUT http://localhost:3100/api/courses/{id}: Atualiza um curso existente
* GET http://localhost:3100/api/courses/{id}: Retorna os detalhes de um curso específico
* DELETE http://localhost:3100/api/courses/{id}: Remove um curso da lista

## Tecnologias utilizadas no Front-End
* Angular
* TypeScript
* HttpClient
* RouterModule
* FormsModule

## Estrutura do projeto Front-End
O projeto está estruturado em módulos, cada um responsável por uma funcionalidade específica.

* AppModule: Módulo raiz da aplicação, responsável por gerenciar as rotas e importar os outros módulos.
* CoreModule: Módulo responsável por fornecer componentes e serviços compartilhados entre os outros módulos.
* CourseModule: Módulo responsável por gerenciar a funcionalidade de listagem e detalhes dos cursos.

## Como executar a aplicação Front-End
1. Faça o clone deste repositório na sua máquina local.
2. Instale as dependências executando o comando npm install na pasta raiz do projeto.
3. Execute o comando `ng serve` para iniciar o servidor de desenvolvimento.
4. Acesse a aplicação através do endereço `http://localhost:4200/` no seu navegador.

A seguir, segue o print das telas do projeto:

![Alt text](./assets/prints/Screenshot2023-01-28200716.jpg?raw=true "Tela CourseManager")

![Alt text](./assets/prints/Screenshot2023-01-28200755.jpg?raw=true "Tela CourseInfor")

## Estruturação de código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construção

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados na pasta `dist/`.

## Execução de testes unitários

Execute `ng test`  para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Execução de testes de ponta a ponta

Execute  `ng e2e` para executar os testes de ponta a ponta via uma plataforma de sua escolha. Para usar este comando, você precisa adicionar primeiro um pacote que implementa capacidades de teste de ponta a ponta.

## Mais ajuda

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou vá verificar a página [Angular CLI Overview and Command Reference](https://angular.io/cli).
