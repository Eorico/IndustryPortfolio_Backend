import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AboutService } from './about.service';
import { About } from 'src/schemas/schemas';

@Controller('about')
export class AboutController {
    constructor(private readonly aboutService: AboutService) {}

    @Get()
    getAll() {
        return this.aboutService.getAll();
    }

    @Post()
    create(@Body() data: About) {
        return this.aboutService.create(data);
    }

    @Put(':id')
    update(@Param() id: string, @Body() data: About) {
        return this.aboutService.update(id, data);
    }

    @Delete(':id')
    delete(@Param() id: string) {
        return this.aboutService.delete(id)
    }
}
