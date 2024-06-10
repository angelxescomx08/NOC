# NOC

Este es un proyecto de node para hacer monitoreos, es basado en un curso.

# Intalación

Definir el archivo **.env** puedes usar el archivo **.env.example** como un ejemplo.

Definiendo las variables de entorno para ejecutar postgres y mongo.

```bash
PORT=3000

MAILER_SERVICE=
MAILER_EMAIL=
MAILER_SECRET_KEY=

PROD=

MONGO_URL=
MONGO_DB_NAME=
MONGO_USER=
MONGO_PASS=

POSTGRES_URL=
POSTGRES_USER=
POSTGRES_DB=
POSTGRES_PASSWORD=
```

Para instalar las dependencias del proyecto ejecutar el siguiente comando:

```bash
npm install
```

Para crear el contenedor de mongo ejecutar el siguiente comando:

```bash
docker-compose up -d
```

Para generar la sincronización de la base de datos ejecutar el siguiente comando:

```bash
npx prisma migrate dev
```

Para ejecutar el proyecto en modo desarrollo ejecutar el siguiente comando:

```bash
npm run dev
```
# Test

Para ejecutar las pruebas unitarias ejecutar el siguiente comando:

```bash
npm run test
```

Asegúrate de tener el contenedor de mongo ejecutándose y el archivo **.env.test** con
las propiedades similares al archivo **.env.example**.