# MyMoto
Este projeto foi desenvolvido como TCC do curso Técnico de Informática Para Internet da [Etec](https://www.etecitapeva.com.br/) de Itapeva - SP.
A ideia do projeto é facilitar a comunicação entre os mototáxistas da cidade, e as pessoas que utilizam este serviço.

## Instruções de Instalação
Cada uma das 4 pastas presentes neste repositório contém uma parte do projeto, e cada uma delas tem suas particularidades no momento da instalação.

#### Cliente
Para que funcione corretamente é necessário que tenha em sua máquina:
- NodeJS
- NPM
- Ionic
<br>
Após ter instalado as dependências necessárias, rode os comandos abaixo em seu terminal:

```bash
  # Entre na pasta do projeto
  $ cd cliente

  # Instale as dependências
  $ yarn install 
  ou 
  $ npm install

  # Rode o projeto em sua máquina
  $ ionic serve
```

#### Motorista
Neste projeto vamos fazer básicamente as mesmas coisas que fizemos para o bom funcionamento do projeto anterior. Caso não tenha, primeiro instale em sua máquina as seguintes dependências: 
- NodeJS
- NPM
- Ionic
<br>
Agora é só rodar os seguintes comandos em seu terminal:

```bash
  # Entre na pasta do projeto
  $ cd motorista

  # Instale as dependências
  $ yarn install 
  ou 
  $ npm install

  # Rode o projeto em sua máquina
  $ ionic serve
```

#### Administrador
Para o admin é preciso ter instalado os seguintes itens: 
- PHP
- Apache
<br>
Agora é só seguir os passos listados abaixo:

1. Certifique-se de que o PHP foi instalado
2. Inicie o serviço Apache
3. Copie e cole a pasta ```administrador``` dentro de ```htdocs```
4. Acesse a pasta do projeto com seu navegador favorito

#### Site
Este é o projeto mais fácil de ser executado. Siga os seguintes passos:

1. Entre na pasta do projeto
2. Agora basta clicar no arquivo ```index.html``` que o projeto irá abrir em seu navegador padrão