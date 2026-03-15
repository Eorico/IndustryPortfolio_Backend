import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ChatbotService {
    private pythonServer = "http://127.0.0.1:8000";

    async ask(question: string) {
        const response = await axios.post(
            `${this.pythonServer}/ask`,
            { question }
        );

        return response.data;
    }
}
