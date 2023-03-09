import { MessagesService } from './messages.service';
export declare class MessagesController {
    private messageService;
    constructor(messageService: MessagesService);
    getMessages(): Promise<any>;
    setMessage(newMessage: any): Promise<any>;
}
