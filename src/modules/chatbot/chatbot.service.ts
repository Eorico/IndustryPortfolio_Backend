import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ChatbotService {
    private pythonServer = "https://industry-portfolio-ai.onrender.com";

    async ask(question: string) {
        const response = await axios.post(
            `${this.pythonServer}/ask`,
            { question }
        );

        return response.data;
    }
}
