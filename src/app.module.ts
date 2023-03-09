import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [ProductsModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
