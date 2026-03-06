import { Module } from '@nestjs/common';
import { TechSkillsController } from './tech-skills.controller';
import { TechSkillsService } from './tech-skills.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TechSkills, TechSkillsSchema } from 'src/schemas/schemas';

@Module({
  imports: [
      MongooseModule.forFeature([
        { name: TechSkills.name, schema: TechSkillsSchema }
      ])
    ],
  controllers: [TechSkillsController],
  providers: [TechSkillsService],
  exports: [TechSkillsService],
})
export class TechSkillsModule {}
