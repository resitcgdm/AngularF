import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public name:string="Sayın kullanıcımız";
  constructor() { }

  ngOnInit(): void {
  //  this.getName();
   
  }

   public getName() {
    return this.name;


   }

  }


