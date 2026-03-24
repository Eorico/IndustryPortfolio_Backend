import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
    constructor(private mailService: MailService) {}

    @Post('send')
    async sendMail(@Body() body: any) {
        await this.mailService.sendContactEmail(body);
        return { message: "Email sent successfully!" }
    }
}
