# Ecommerce challenge

## Setup

### Demo mode (like prod)

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

### Development mode (with docker-compose)

1. Open one terminal and go to the project folder.
2. Go to `/bff` folder (`cd bff`) and install dependencies: `npm i`.
3. Go to `/app` folder (`cd app`) and install dependencies: `npm i`.
4. Go to the project folder and run this: `docker-compose up`
5. Open the app using the following URL: http://localhost:3000
6. Open the bff using the following URL: http://localhost:3001/api/items


## Tests

Either in bff or app, go to the respective folder and run `npm run test`.