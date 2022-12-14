/* eslint-disable prettier/prettier */
import { Content } from "./content"

describe('Notification content', () =>{
    test('ir should be able to create a notification content', ()=> {
        const content = new Content("Você recebeu uma solicitação de amizade")
    
        expect(content).toBeTruthy();
    })
    //teste de conteudo minimo para ser aprovado
    test('ir should not be able to create a notification contente with less than 5 characters', ()=> {
        expect(() => new Content('vo')).toThrow();
    })
    
    
    test('ir should not be able to create a notification contente with more than 240 characters', ()=> {
        expect(() => new Content('a'.repeat(241))).toThrow();
    })

});
