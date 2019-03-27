import { Component ,Input,Output} from '@angular/core';
import { Todo } from './model/Todo';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoListAppVer2';
  @Input() inputdata: Todo[] = [];
  // @Output() listtodo : [];
  handleInput(nameInput) {
    this.inputdata.push(new Todo(nameInput));
  }

  
}
