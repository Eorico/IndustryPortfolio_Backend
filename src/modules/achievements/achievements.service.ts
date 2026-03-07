import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Achievements, AchievementsDocument } from 'src/schemas/schemas';

@Injectable()
export class AchievementsService {
    constructor(@InjectModel(Achievements.name) private achievementsModel: Model<AchievementsDocument>) {}
    
    
    async getAll(): Promise<Achievements[]> {
        return this.achievementsModel.find().exec();
    }

    async create(about: Achievements): Promise<Achievements> {
        const createdAbout = new this.achievementsModel(about);
        return createdAbout.save();
    }

    async update(id: string, data: Partial<Achievements>): Promise<Achievements | null> {
        return this.achievementsModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<Achievements | null> {
        return this.achievementsModel.findByIdAndDelete(id);
    }
}
