import { Module } from '@nestjs/common'
import { PrismaService } from './services'
import { CreateAccountController } from './controllers'

@Module({
  controllers: [CreateAccountController],
  providers: [PrismaService],
})
export class AppModule {}
