# Projeto para acompanhar curso Alura - Curso de Rest com NodeJS: API com Express e MySQL

```
# Gerando package.json (copiar conteúdo e criar um package.json)
docker run -it node npm init

# Montando contêiner com node/npm
docker run --rm -it --name alura-rest-com-nodejs-api-com-express-e-mysql -v $PWD:/home/app -p 8080:3000 cecez86/alura-rest-com-nodejs-api-com-express-e-mysql-v2

# Acessando contêiner
docker exec -it [ID_CONTEINER] /bin/sh 

# Instalando pacotes necessários
$ npm install express consign body-parser mysql

# Instalando pacote necessário para ambiente dev
# nodemon: detecta alterações no diretório e reinicia servidor automaticamente
$ npm install --save-dev nodemon

# Ajustando conexão com MySQL, 
# pois gerou este erro ao conectar ("Client does not support authentication protocol requested by server;")
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;

```