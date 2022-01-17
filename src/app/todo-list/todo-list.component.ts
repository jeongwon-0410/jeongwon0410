import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoserviceService } from '../services/todoservice.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoserviceService]
})
export class TodoListComponent implements OnInit {

  // todos!: Todo[]
  todoTitle!: string
  // idForTodo!:number

  todoService:TodoserviceService
  constructor(todoService:TodoserviceService) {
    this.todoService = todoService
   }

  ngOnInit(): void {
    // this.idForTodo = 4
    this.todoTitle = ""
    // this.todos =  [
    //   {
    //     id: 1,
    //     title: 'Finish Angular Screencast',
      
    //   },
    //   {
    //     id: 2,
    //     title: 'Take over world',
      
    //   },
    //   {
    //     id: 3,
    //     title: 'One more thing',
      
    //   },
    // ];
  
  }

  addTodo(): void{
    if(this.todoTitle.trim().length === 0){
      return
    }

    this.todoService.addTodo(this.todoTitle)
    this.todoTitle=''
  }

 

}
