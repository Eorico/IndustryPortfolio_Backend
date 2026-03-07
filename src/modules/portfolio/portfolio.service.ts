import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio, PortfolioDocument } from 'src/schemas/schemas';

@Injectable()
export class PortfolioService {
    constructor(@InjectModel(Portfolio.name) private portfolioModel: Model<PortfolioDocument>) {}

    async getPortfolio(): Promise<Portfolio> {
        const portfolio = await this.portfolioModel.findOne().exec();
        if (!portfolio) throw new NotFoundException("Portfolio not found");
        return portfolio;
    }

    async getSection<K extends keyof Portfolio>(section: K): Promise<Portfolio[K]> {
        const portfolio = await this.portfolioModel.findOne().exec();
        if (!portfolio) throw new NotFoundException("Portfolio not found");
        return portfolio[section];
    }
}   
