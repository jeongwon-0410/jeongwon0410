import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoserviceService } from '../services/todoservice.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!:Todo
  // @Output() deleteItem =  new EventEmitter()
  todoService:TodoserviceService
  constructor(todoService:TodoserviceService) {
    this.todoService = todoService
   }

  ngOnInit(): void {
  }

  // deleteTodo(id:number):void{
  //   this.deleteItem.emit(id)
  // }

}
