# CloudCalculator-Client

## React + .NET Core + SQL Server WebApp

### NPM Commands:
- npm install

#### React Boostrap
- npm install react-bootstrap@next bootstrap@5.0.2

#### Fonts Awesome
- npm i --save @fortawesome/fontawesome-svg-core
- npm install --save @fortawesome/free-solid-svg-icons
- npm install --save @fortawesome/react-fontawesome
- npm install --save @fortawesome/free-brands-svg-icons
- npm install --save @fortawesome/free-regular-svg-icons
- npm audit fix

#### Json-Server
- npx json-server --watch mockApi.json --port 3001


#### Docker
- docker build -f Dockerfile-prod -t sample:prod .
- docker run -it -p 8081:80 --rm sample:prod
- docker-compose -f docker-compose-prod.yml up -d --build