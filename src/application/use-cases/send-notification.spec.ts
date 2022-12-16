/* eslint-disable prettier/prettier */
import { SendNotification } from "./send-notification"
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository.spec";



describe('Send notification', ()=>{
    it('should be able to send a notification',async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepository);

        const { notification } =  await sendNotification.execute({
            content: 'this is a notification',
            category: 'Social',
            recipientId: 'example-recipient-id',
        });

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);
    });
});