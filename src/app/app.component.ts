import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  parentData = 'Hello from parent';

  receivedData = '';

  handleData(data: string) {
    this.receivedData = data;
  }

}
//first we send data to child1component
//declare a variable
//then receive data by using received data variable
//write a function to handle the data , this.receivedData = data;


