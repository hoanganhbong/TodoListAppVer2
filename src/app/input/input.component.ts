import { Component, OnInit,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() onPressEnter = new EventEmitter();

  
  constructor() { }
  ngOnInit() {
  }
  onEnter($event) {
    this.onPressEnter.emit($event.target.value);
    $event.target.value = '';
    console.log($event.target.value);
  }
  
}
