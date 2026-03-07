import { Injectable } from '@nestjs/common';
import { PortfolioService } from './modules/portfolio/portfolio.service';
import { Portfolio } from './schemas/schemas';

@Injectable()
export class AppService {
   constructor(private readonly portfolioService: PortfolioService) {}

   async getPortfolio() {
    const portfolio = await this.portfolioService.getPortfolio();
    return portfolio;
   }

   async getSection(section: keyof Portfolio) {
    return this.portfolioService.getSection(section);
   }
   
}
