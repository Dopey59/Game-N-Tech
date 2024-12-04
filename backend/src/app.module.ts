import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Module pour gérer les variables d'environnement
import { HttpModule } from '@nestjs/axios'; // Pour les appels HTTP
import { PrintfulModule } from './prinfutl/prinfutl.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Charge les variables d'environnement depuis .env
    HttpModule, // Nécessaire pour les requêtes API
    PrintfulModule, // PrintfulModule est maintenant séparé
  ],
})
export class AppModule {}
