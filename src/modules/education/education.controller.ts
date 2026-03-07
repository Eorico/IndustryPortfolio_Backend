import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EducationService } from './education.service';
import { Education } from 'src/schemas/schemas';

@Controller('education')
export class EducationController {
    constructor(private readonly educationService: EducationService) {}
    
    @Get()
    getAll() {
        return this.educationService.getAll();
    }

    @Post()
    create(@Body() data: Education) {
        return this.educationService.create(data);
    }

    @Put(':id')
    update(@Param() id: string, @Body() data: Education) {
        return this.educationService.update(id, data);
    }

    @Delete(':id')
    delete(@Param() id: string) {
        return this.educationService.delete(id)
    }
}
