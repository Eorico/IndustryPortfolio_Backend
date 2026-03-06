import { Injectable } from '@nestjs/common';
import { AboutService } from './about/about.service';
import { EducationService } from './education/education.service';
import { ExperienceService } from './experience/experience.service';
import { TechSkillsService } from './tech-skills/tech-skills.service';
import { AchievementsService } from './achievements/achievements.service';
import { ProjectsService } from './projects/projects.service';

@Injectable()
export class AppService {
   constructor(
    private readonly aboutService: AboutService,
    private readonly educationService: EducationService,
    private readonly experienceService: ExperienceService,
    private readonly techSkillsService: TechSkillsService,
    private readonly achievementsService: AchievementsService,
    private readonly projectService: ProjectsService,
   ) {}

   async getPortfolio() {
    const about = await this.aboutService.getAll();
    const educations = await this.educationService.getAll();
    const experiences = await this.experienceService.getAll();
    const techSkills = await this.techSkillsService.getAll();
    const achievements = await this.achievementsService.getAll();
    const projects = await this.projectService.getAll();

    return {
      about: about[0] ?? null,
      educations,
      experiences,
      techSkills: techSkills[0] ?? null,
      achievements,
      projects
    }
   }
   
}
