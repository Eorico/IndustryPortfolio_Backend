import { Module } from '@nestjs/common';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Portfolio, PortfolioSchema } from 'src/schemas/schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Portfolio.name, schema: PortfolioSchema
    }])
  ],
  controllers: [PortfolioController],
  providers: [PortfolioService],
  exports: [PortfolioService],
})
export class PortfolioModule {}
