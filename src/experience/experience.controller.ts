import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { Experience } from 'src/schemas/schemas';

@Controller('experience')
export class ExperienceController {
    constructor(private readonly experiencesService: ExperienceService) {}
    
    @Get()
    getAll() {
        return this.experiencesService.getAll();
    }

    @Post()
    create(@Body() data: Experience) {
        return this.experiencesService.create(data);
    }

    @Put(':id')
    update(@Param() id: string, @Body() data: Experience) {
        return this.experiencesService.update(id, data);
    }

    @Delete(':id')
    delete(@Param() id: string) {
        return this.experiencesService.delete(id)
    }
}
