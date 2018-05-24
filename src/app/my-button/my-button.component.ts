import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-button',
  template: `
    <button (click)="handleClick()">{{ label }}</button>
  `,
  styles: [`
    button {
      border: 3px solid #aaa;
      padding: 8px 10px;
      background-color: #bada55;
      font-size: 20px;
    }
  `]
})
export class MyButtonComponent implements OnInit {

  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  private clicksCt = 0;

  constructor() {
  }

  ngOnInit() {
  }

  handleClick() {
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }

}
