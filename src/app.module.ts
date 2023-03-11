import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { VistasModule } from './vistas/vistas.module';
@Module({
  imports: [
    ProductsModule,
    MessagesModule,
    MongooseModule.forRoot(
      'mongodb+srv://fer:contra123@cluster0.emeikir.mongodb.net/?retryWrites=true&w=majority&dbName=ecommerceDesafio',
    ),
    UsersModule,
    AuthModule,
    VistasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
