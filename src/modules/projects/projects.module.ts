import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from 'src/schemas/schemas';
import { AboutModule } from '../about/about.module';
import { EducationModule } from '../education/education.module';
import { ExperienceModule } from '../experience/experience.module';
import { AchievementsModule } from '../achievements/achievements.module';
import { TechSkillsModule } from '../tech-skills/tech-skills.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Project.name, schema: ProjectSchema }
    ]),
    AboutModule, EducationModule,
    ExperienceModule, AchievementsModule,
    ProjectsService, TechSkillsModule
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService]
})
export class ProjectsModule {}
