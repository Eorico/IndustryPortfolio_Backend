import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { Achievements } from 'src/schemas/schemas';

@Controller('achievements')
export class AchievementsController {
    constructor(private readonly achievementsService: AchievementsService) {}
    
    @Get()
    getAll() {
        return this.achievementsService.getAll();
    }

    @Post()
    create(@Body() data: Achievements) {
        return this.achievementsService.create(data);
    }

    @Put(':id')
    update(@Param() id: string, @Body() data: Achievements) {
        return this.achievementsService.update(id, data);
    }

    @Delete(':id')
    delete(@Param() id: string) {
        return this.achievementsService.delete(id)
    }
}
