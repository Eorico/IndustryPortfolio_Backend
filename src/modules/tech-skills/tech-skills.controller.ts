import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TechSkillsService } from './tech-skills.service';
import { TechSkills } from 'src/schemas/schemas';

@Controller('tech-skills')
export class TechSkillsController {
    constructor(private readonly techSkillsService: TechSkillsService) {}
    
    @Get()
    getAll() {
        return this.techSkillsService.getAll();
    }

    @Post()
    create(@Body() data: TechSkills) {
        return this.techSkillsService.create(data);
    }

    @Put(':id')
    update(@Param() id: string, @Body() data: TechSkills) {
        return this.techSkillsService.update(id, data);
    }

    @Delete(':id')
    delete(@Param() id: string) {
        return this.techSkillsService.delete(id)
    }
}
