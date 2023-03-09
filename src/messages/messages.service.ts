import { Injectable } from '@nestjs/common';
import MsjsRepo from 'src/persistencia/repos/MsjsRepo';

const msjsRepo = MsjsRepo.getInstancia();
@Injectable()
export class MessagesService {
  async getMessages() {
    let msjs = await msjsRepo.getAll();
    return msjs;
  }

  async createMessage(newMsg) {
    let msgAdd = await msjsRepo.add(newMsg);

    return msgAdd;
  }
}
