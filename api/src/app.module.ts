import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { envSchema } from './env'
import { PrismaService } from './services'
import { AuthenticationModule } from './modules'
import {
  CreateAccountController,
  AuthenticationController,
} from './controllers'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthenticationModule,
  ],
  controllers: [CreateAccountController, AuthenticationController],
  providers: [PrismaService],
})
export class AppModule {}
