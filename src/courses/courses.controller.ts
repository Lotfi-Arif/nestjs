import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {

    constructor(private coursesService: CoursesService){}

    @Get()
    async getCourses() {
        const course = await this.coursesService.getCourses();
    }

    @Get(':courseId')
    async getCourse(@Param('courseId') courseId){
        const course = await this.coursesService.getCousrse(courseId);
        return course;
    }

    @Post()
    async addCourse(@Body() createCourseDto: CreateCourseDto) {
        const course = await this.coursesService.addCourse(createCourseDto);
        return course;
    }

    @Delete()
    async deleteCourse(@Query() query) {
        const courses = await this.coursesService.deleteCourse(query.courseId);
        return courses;
    }
}
