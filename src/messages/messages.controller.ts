import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
  constructor(private messageService: MessagesService) {}
  @Get()
  getMessages() {
    return this.messageService.getMessages();
  }
  @Post()
  setMessage(@Body() newMessage) {
    return this.messageService.createMessage(newMessage);
  }
}
