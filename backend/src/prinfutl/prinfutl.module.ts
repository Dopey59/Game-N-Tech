import { Module } from '@nestjs/common';
import { PrintfulService } from './printful.service';
import { PrintfulController } from './printful.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule], // Permet les requêtes HTTP avec Axios
  controllers: [PrintfulController],
  providers: [PrintfulService],
  exports: [PrintfulService], // Exporter le service pour d'autres modules

})
export class PrintfulModule {}
