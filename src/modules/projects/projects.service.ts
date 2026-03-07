import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from 'src/schemas/schemas';

@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {}
          
    async getAll(): Promise<Project[]> {
        return this.projectModel.find().exec();
    }

    async create(about: Project): Promise<Project> {
        const createdAbout = new this.projectModel(about);
        return createdAbout.save();
    }

    async update(id: string, data: Partial<Project>): Promise<Project | null> {
        return this.projectModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<Project | null> {
        return this.projectModel.findByIdAndDelete(id);
    }
}
