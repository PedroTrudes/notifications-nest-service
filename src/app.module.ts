/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

//ele sofre de injeção de dependencia
//decorator sendo usado com o @
@Module({
  imports: [HttpModule, DatabaseModule],
  
})
export class AppModule {}
