/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common/decorators";
import { Todo } from "./todo.interface";

@Injectable()

export class TodoService{
    private storage : Todo[] = [];

    create(todo: Todo): void {
        this.storage.push(todo);
    }

    update(id: number , todo:Todo):void{
        const index = this.storage.findIndex((t: Todo) => t.id == id);
        this.storage[index] = todo;;
    }

    findAll() : Todo[]{
        return this.storage;
    }

    findOne(id: number): Todo{
        return this.storage.find((t:Todo)=> t.id === id);
    }

    remove(id : number): void{
        const index = this.storage.findIndex((t: Todo) => t.id === id);
        this.storage.splice(index,1);
    }

}