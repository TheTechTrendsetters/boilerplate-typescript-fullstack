# Fullstack Base Project

Requirements:

- Typescript
- Express
- Awilix
- MySQL8
- MongoDB

## Installation

> `pn` is alias for [`pnpm`](https://pnpm.io/)

```bash
# Initialize a new project with pnpm, create a package.json file.
pn init

# Install dependencies
pn install -D @types/node nodemon ts-node typescript rimraf

# Create a tsconfig.json file for typescript configuration
npx tsc --init --rootDir src --outDir build --esModuleInterop true --resolveJsonModule true --lib es6 --module commonjs --allowjs true --noImplicitAny true

# Install eslint and prettier dependencies
pn install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier

# Install dependencies for awilix, express, mysql2, winston, morgan, dotenv
pn install awilix awilix-express dotenv express morgan winston mysql2

# Install dependencies with types for typescript
pn install -D @types/express @types/morgan github:types/mysql2 vite vitest

# Install dependencies for standard eslint configuration
pn install -D eslint-config-standard-with-typescript eslint-plugin-n eslint-plugin-promise
```

## Usage

```bash
pnpm run start:prod
```

## Development

```bash
pnpm run start:dev
```

## Testing

```bash
pnpm run test
```

## Linting

```bash
# Run linter and show errors
pnpm run linter

# Fix linting errors
pnpm run linter:fix

# Fix linting errors and format code
pnpm run linter:format
```

## Run with Docker

```bash
# Build docker image and run container
docker-compose up -d --build
```

## Project Structure

Under src folder, you will find the following structure:

```bash
src
├── api
│   ├── controllers
│   │   └── base.ts
│   ├── exceptions
│   │   └── application.exception.ts
│   ├── middleware
│   │   └── morgan.middleware.ts
│   ├── routes
│   │   └── index.route.ts
│   ├── services
│   │   └── index.service.ts
│   ├── app.ts
│   └── container.ts
├── config
│   ├── index.ts
│   └── logger.ts
├── database
│   ├── mysql
│   │   ├── migrations
│   │   ├── models
│   │   ├── repositories
│   │   └── services
│   └── mongodb
│       ├── models
│       ├── repositories
│       └── services
├── shared
│   ├── interfaces
│   └── types
├── web
│   └── views
└── index.ts
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors and acknowledgment

- [Arturo López](mailto:lgzarturo@gmail.com)
