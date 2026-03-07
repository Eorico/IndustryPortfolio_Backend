import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Portfolio } from './schemas/schemas';

@Controller('portfolio')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPortfolio() {
    return this.appService.getPortfolio();
  }

  @Get(':section')
  getSection(@Param('section') section: keyof Portfolio) {
    return this.appService.getSection(section);
  }
}
