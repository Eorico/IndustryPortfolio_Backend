import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TechSkills, TechSkillsDocument } from 'src/schemas/schemas';

@Injectable()
export class TechSkillsService {
    constructor(@InjectModel(TechSkills.name) private techSkillsModel: Model<TechSkillsDocument>) {}
      
    async getAll(): Promise<TechSkills[]> {
        return this.techSkillsModel.find().exec();
    }

    async create(about: TechSkills): Promise<TechSkills> {
        const createdAbout = new this.techSkillsModel(about);
        return createdAbout.save();
    }

    async update(id: string, data: Partial<TechSkills>): Promise<TechSkills | null> {
        return this.techSkillsModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<TechSkills | null> {
        return this.techSkillsModel.findByIdAndDelete(id);
    }
}
