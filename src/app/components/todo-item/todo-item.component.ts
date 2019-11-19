import { Component, OnInit, Input } from '@angular/core';
import {TodoService} from '../../servies/todo.service';
import {Todo} from '../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo;
  constructor(private todoService:TodoService) { }


  ngOnInit() {
  }

  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    // togle in ui
    this.todo.completed = !this.todo.completed;
    //toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo =>{
      console.log(todo);
    });
  }

  onClick(todo){
    console.log(todo);

  }
}
