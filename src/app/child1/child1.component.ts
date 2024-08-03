import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss'
})
export class Child1Component {
//to child1 component we need to send data
//so child1 should recieve data
//to create an Input 
@Input() data: string = '';

}
