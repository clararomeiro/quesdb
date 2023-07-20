# Quesdb

## Architecture

### Backend:

#### Stack

- .Net;
- SQL Server.

#### How to run

- Install Visual Studio for .Net development;
- Install SQL Server Express + SQL Server Management Studio;
- Clone project and open the .sln file on Visual Studio;
- You'll need to create this file: "quesdb\backEnd\QuesDB\config\APIKEY.txt" containig just the openAi Key.
- Connect SQL Server on Visual Studio;
- Run project and access swagger through this url: https://localhost:7259/swagger/index.html/.

### Frontend:

#### Stack

- NextJs;
- Material UI;
- Redux.

#### How to run

##### Locally

- Install node v18;
- Inside of frontend folder run ```npm i```
- Inside of frontend folder run ```npm run dev```
- Access the project on [localhost:8080](http://localhost:8080)

##### Containers

- Install docker and docker-compose;
- Inside of frontend folder run ```docker-compose up -d```
- Access the project on [localhost:8080](http://localhost:8080)

## Requirements:

- [ ] **Funcionalidade**: Avalia se o sistem atende aos requisitos funcionais especificados e se funciona sem erros
- [ ] **Design e usabilidade**: Avalia a qualidade do design e a facilidade de uso do sistema Web
- [ ] **Desempenho**:	Avalia a velocidade e a eficiência do sistema Web em responder às solicitações do usuário bem como o uso de elementos que ajudam no desempenho como, por exemplo, paginação em listagens.
- [ ] **Segurança**:	Avalia a segurança do sistema Web e a proteção contra vulnerabilidades conhecidas
- [ ] **Responsividade**:	Avalia a capacidade do sistema Web de se adaptar a diferentes tamanhos de tela e dispositivos
- [ ] **Conformidade**: com padrões e boas práticas da indústria	Avalia se o sistema Web segue padrões de codificação recomendados e utiliza tecnologias e frameworks atualizados e de amplo uso
- [ ] **Documentação**:	Avalia a qualidade e a quantidade da documentação fornecida. README precisa ser suficiente para alguém baixar o projeto do repositorio e colocar para rodar lendo a documentação.
- [ ] **Testes**:	Avalia a quantidade e a qualidade dos testes realizados
