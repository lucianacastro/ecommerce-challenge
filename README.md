# Ecommerce challenge

## Setup

### With docker

1. Go to the project folder and run this: `docker-compose up`
2. Open the app using the following URL: http://localhost:3000
3. Open the bff using the following URL: http://localhost:3001/api/items

### Without docker

#### Start the BFF service
1. Open one terminal and go to the project's `/bff` folder.
2. Install the dependencies: `npm i`
3. Start the server: `MELI_API_URL=https://api.mercadolibre.com npm start`
4. Open the bff using the following URL: http://localhost:3001/api/items

#### Start the Frontend application
1. Open another terminal and go to the project's `/app` folder.
2. Install the dependencies: `npm i`
3. Build the application (uses NextJS): `npm run build`
4. Start the server: `npm start`
5. Open the app using the following URL: http://localhost:3000