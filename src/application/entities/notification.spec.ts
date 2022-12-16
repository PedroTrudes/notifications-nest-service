/* eslint-disable prettier/prettier */

import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification content', () =>{
    test('ir should be able to create a notification content', ()=> {
        const notification = new Notification({
            content: new Content('nova solicitação de amizade'),
            category: 'social',
            recipientId: 'exemple-recipent-id',
        })
        
        expect(notification).toBeTruthy();
    })

});
