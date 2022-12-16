/* eslint-disable prettier/prettier */
import { Notification } from "@application/entities/notification";
import { NotificationsRespository } from "@application/repositories/notification-repository";


export class InMemoryNotificationsRepository implements NotificationsRespository {
public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}