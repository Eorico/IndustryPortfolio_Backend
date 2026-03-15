import { Body, Controller, Post } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';

@Controller('chatbot')
export class ChatbotController {
    constructor(private chatbotService: ChatbotService) {}

    @Post("ask")
    async ask(@Body("question") question: string) {
        const result = await this.chatbotService.ask(question);

        return { answer: typeof result === "string" ? result : JSON.stringify(result) };
    }
}
