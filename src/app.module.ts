import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';
import { TechSkillsModule } from './tech-skills/tech-skills.module';
import { AchievementsModule } from './achievements/achievements.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    AboutModule, EducationModule, 
    ExperienceModule, TechSkillsModule, 
    AchievementsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
