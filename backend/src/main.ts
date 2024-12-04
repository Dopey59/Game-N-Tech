import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Charger les variables d'environnement

  const app = await NestFactory.create(AppModule);

  // Activer CORS pour autoriser les requêtes provenant du frontend
  app.enableCors({
    origin: 'http://127.0.0.1:5173', // Autoriser uniquement votre frontend
    methods: 'GET,POST,PUT,DELETE', // Méthodes HTTP permises
    allowedHeaders: 'Content-Type,Authorization', // En-têtes permis
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`Application running on http://localhost:${port}`);
}

bootstrap();
