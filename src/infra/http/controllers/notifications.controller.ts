/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

//Usado para fazer as requisições a passar as ROTAS
@Controller('notifications')
export class NotificationController {
  constructor(
    private sendNotification: SendNotification
  ){}


  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const {notification} = await this.sendNotification.execute({
      recipientId,
      content,
      category
    })

    return {notification}
  }
}
