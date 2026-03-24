import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const user = config.get<string>("EMAIL_USER");
        const pass = config.get<string>("EMAIL_PASS");

        console.log("Email user:", user);
        console.log("Email pass", pass);
        
        return {
          transport: {
            service: "gmail",
            auth: {
              user, pass
            }
          }
        }
        
      }
    })
  ],
  providers: [MailService],
  controllers: [MailController]
})
export class MailModule {}
