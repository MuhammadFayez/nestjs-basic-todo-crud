/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Logger, Param,ParseIntPipe, Post, Put } from "@nestjs/common";
import { Todo } from "./todo.interface";
import { TodoService } from "./todo.service";

@Controller('todo')

export class TodoController {

    private readonly logger = new Logger(TodoController.name)

    constructor(private readonly todoService : TodoService){}

    @Post()
    create(@Body() todo : Todo): void{
        this.logger.log("Handling Create() request");
         return this.todoService.create(todo);
    }

    @Put(':id')
    update(@Param('id',ParseIntPipe) id : number , @Body() todo : Todo):void{
        this.logger.log('Handling update() request with id=' + id + '...');
        return this.todoService.update(id , todo);
    }

    @Get()
    findAll(): Todo[]{
        this.logger.log("Handling findAll() request");
        return this.todoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id : number): Todo{
        this.logger.log('Handling findOne() request with id=' + id + '...');
        return this.todoService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id : number):void{
        this.logger.log('Handling remove() request with id=' + id + '...');
        return this.todoService.remove(id);
    }
}