import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { PrismaService } from './infra/prisma.service';

//ele sofre de injeção de dependencia
//decorator sendo usado com o @
@Module({
  imports: [],
  controllers: [AppController], //Arquivos que vão executar requisições Http
  providers: [PrismaService],
})
export class AppModule {}
