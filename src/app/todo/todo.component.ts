import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  Todo = [
    {task:"fold clothes", completed:true},
    {task:"put clothes away", completed:false},
    {task:"cross stitch", completed:false},
    {task:"run", completed:true},
    {task:"make breakfast", completed:true},
    {task:"walk dog", completed:false},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}