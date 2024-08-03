import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component {
//to send data to parent
dataToSend = "Hello from Child2";

@Output() dataChange = new EventEmitter<string>();

sendData() {
  this.dataChange.emit(this.dataToSend);
}
}
