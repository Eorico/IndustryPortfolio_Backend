import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Project } from 'src/schemas/schemas';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectService: ProjectsService) {}
        
    @Get()
    getAll() {
        return this.projectService.getAll();
    }

    @Post()
    create(@Body() data: Project) {
        return this.projectService.create(data);
    }

    @Put(':id')
    update(@Param() id: string, @Body() data: Project) {
        return this.projectService.update(id, data);
    }

    @Delete(':id')
    delete(@Param() id: string) {
        return this.projectService.delete(id)
    }
}
