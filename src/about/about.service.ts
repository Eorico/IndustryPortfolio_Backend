import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { About, AboutDocument } from 'src/schemas/schemas';

@Injectable()
export class AboutService {
    constructor(@InjectModel(About.name) private aboutModel: Model<AboutDocument>) {}


    async getAll(): Promise<About[]> {
        return this.aboutModel.find().exec();
    }

    async create(about: About): Promise<About> {
        const createdAbout = new this.aboutModel(about);
        return createdAbout.save();
    }

    async update(id: string, data: Partial<About>): Promise<About | null> {
        return this.aboutModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<About | null> {
        return this.aboutModel.findByIdAndDelete(id);
    }
}
