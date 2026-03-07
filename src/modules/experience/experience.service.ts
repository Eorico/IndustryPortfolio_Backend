import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Experience, ExperienceDocument } from 'src/schemas/schemas';

@Injectable()
export class ExperienceService {
    constructor(@InjectModel(Experience.name) private experiencesModel: Model<ExperienceDocument>) {}


    async getAll(): Promise<Experience[]> {
        return this.experiencesModel.find().exec();
    }

    async create(about: Experience): Promise<Experience> {
        const createdAbout = new this.experiencesModel(about);
        return createdAbout.save();
    }

    async update(id: string, data: Partial<Experience>): Promise<Experience | null> {
        return this.experiencesModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<Experience | null> {
        return this.experiencesModel.findByIdAndDelete(id);
    }
}
