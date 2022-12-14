/* eslint-disable prettier/prettier */
import { Notification } from "src/application/entities/notification";
import { NotificationsRespository } from "../../../../application/repositories/notification-repository";
import { PrismaService } from "../prisma.service";

export class PrismaNotificationsRepository implements NotificationsRespository{
    constructor(private prismaService: PrismaService) {

    }    
    
    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                recipientId: notification.recipentId,
                readAt: notification.readAt,
                createdAt: notification.createdAt,
            },
        });
    }

}