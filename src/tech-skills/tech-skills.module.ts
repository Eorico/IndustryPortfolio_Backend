import { Module } from '@nestjs/common';
import { TechSkillsController } from './tech-skills.controller';
import { TechSkillsService } from './tech-skills.service';

@Module({
  controllers: [TechSkillsController],
  providers: [TechSkillsService]
})
export class TechSkillsModule {}
