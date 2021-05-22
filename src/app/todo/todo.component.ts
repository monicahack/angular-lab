import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  Todo: any[] = [
    {task:"fold clothes", completed:true},
    {task:"put clothes away", completed:false},
    {task:"cross stitch", completed:false},
    {task:"run", completed:true},
    {task:"make breakfast", completed:true},
    {task:"walk dog", completed:false},
    {task:"paddle board", completed:true},
    {task:"rest", completed:false},
    {task:"clean floors", completed:false},
  ];

  filterTodoInput = '';
  addTodoInput = '';
  searchText = '';

  constructor() { }

  ngOnInit(): void {
  }

  removeTask(items: any){
    const index: number = this.Todo.indexOf(items);
    this.Todo.splice(index, 1);
  }

  completeTask(index: number) {
    this.Todo[index].completed = true;
  }

}
