/* eslint-disable prettier/prettier */
import { Notification } from "../entities/notification";

export abstract class NotificationsRespository {
    abstract create(notification: Notification): Promise<void>;
}