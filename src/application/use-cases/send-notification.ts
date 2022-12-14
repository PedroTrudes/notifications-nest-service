/* eslint-disable prettier/prettier */
import { Notification } from "../entities/notification";
import { Content } from "../entities/content";
import { NotificationsRespository } from "../repositories/notification-repository";

interface SendNotificationRequest{
    recipentId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification;
}

export class SendNotification {
    constructor(private notificationsRepository: NotificationsRespository) {}

    async execute(request: SendNotificationRequest,): Promise<SendNotificationResponse>{
        const {recipentId, content, category} = request;

        const notification = new Notification({
            recipentId,
            content: new Content(content),
            category,
        });

        await this.notificationsRepository.create(notification);

        return {
            notification,
        };

    }
}