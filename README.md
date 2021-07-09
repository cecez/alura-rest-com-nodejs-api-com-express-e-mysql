# Projeto para acompanhar curso Alura - Curso de Rest com NodeJS: API com Express e MySQL

```
# Gerando package.json (copiar conteúdo e criar um package.json)
docker run -it node npm init

# Montando contêiner com node/npm
docker run --rm -it --name alura-rest-com-nodejs-api-com-express-e-mysql -v $PWD:/home/app -p 8080:3000 cecez86/alura-rest-com-nodejs-api-com-express-e-mysql-v2

# Instalando pacote necessário
$ npm install express consign

# Instalando pacote necessário para ambiente dev
# nodemon: detecta alterações no diretório e reinicia servidor automaticamente
$ npm install --save-dev nodemon

```