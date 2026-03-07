import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Education, EducationDocument } from 'src/schemas/schemas';

@Injectable()
export class EducationService {
     constructor(@InjectModel(Education.name) private educationModel: Model<EducationDocument>) {}
    
    
    async getAll(): Promise<Education[]> {
        return this.educationModel.find().exec();
    }

    async create(about: Education): Promise<Education> {
        const createdAbout = new this.educationModel(about);
        return createdAbout.save();
    }

    async update(id: string, data: Partial<Education>): Promise<Education | null> {
        return this.educationModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<Education | null> {
        return this.educationModel.findByIdAndDelete(id);
    }
}
