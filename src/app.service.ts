import { Injectable } from '@nestjs/common';

//Service é onde fica a logica do projeto
//decorator INJECTABLE para injetar uma dependencia no projeto
@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem Vindo!';
  }
}
