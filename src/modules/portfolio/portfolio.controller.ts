import { Controller, Get, Param } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { Portfolio } from 'src/schemas/schemas';

@Controller()
export class PortfolioController {
    constructor(private readonly portfolioService: PortfolioService) {}

    @Get()
    async getPortfolio(): Promise<Portfolio> {
        return this.portfolioService.getPortfolio();
    }

    @Get(':section')
    async getSection(@Param('section') section: keyof Portfolio) {
        return this.portfolioService.getSection(section);
    }
}
