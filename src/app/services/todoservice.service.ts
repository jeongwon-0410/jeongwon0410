import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Finish Angular Screencast',
    
    },
    {
      id: 2,
      title: 'Take over world',
    
    },
    {
      id: 3,
      title: 'One more thing',
    
    },
  ];

  todoTitle: string = ''
  idForTodo:number = 4
  constructor() { 
     
  }

  addTodo(todotitle:string):void{

    if(todotitle.trim().length === 0){
      return 
    }
    
    this.todos.push({
      id:this.idForTodo,
      title: todotitle
    })

    todotitle = ''
    this.idForTodo++


  }

  deleteTodo(id:number):void{
    this.todos = this.todos.filter((todo: { id: number; })=>todo.id !== id)
  }
}
