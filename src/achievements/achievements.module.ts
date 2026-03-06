import { Module } from '@nestjs/common';
import { AchievementsController } from './achievements.controller';
import { AchievementsService } from './achievements.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Achievements, AchievementsSchema } from 'src/schemas/schemas';

@Module({
  imports: [
      MongooseModule.forFeature([
        { name: Achievements.name, schema: AchievementsSchema }
      ])
    ],
  controllers: [AchievementsController],
  providers: [AchievementsService]
})
export class AchievementsModule {}
