import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from './../user/user.module';
import { LocalStrategy } from './guards/strategies/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { environment } from '@env/backend';
import { JwtStrategy } from './guards/strategies/jwt.strategy';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: environment.jwt_secret,
      signOptions: { expiresIn: environment.jwt_expire }
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule { }
