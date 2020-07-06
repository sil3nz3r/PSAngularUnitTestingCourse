import { MessageService } from "./message.service"
import { Message } from "@angular/compiler/src/i18n/i18n_ast"

describe('MessageService', () => {
    let service: MessageService

    beforeEach(() => {
    })

    it('should have no message to start', () => {
        service = new MessageService();
        expect(service.messages.length).toBe(0);
    })

    it('should add a message when add is called', () => {
        service = new MessageService();

        service.add('message 1');

        expect(service.messages.length).toBe(1);
    })

    it('should remvoe all messages when clear is called', () => {
        service = new MessageService();
        service.add('message 1');

        service.clear();

        expect(service.messages.length).toBe(0);
    })
})