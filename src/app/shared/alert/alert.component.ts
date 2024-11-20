import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  readonly color = input('blue');

  get bgColor(): string {
    return `bg-${this.color()}-400`;
  }

  constructor() {}

  ngOnInit(): void {}
}
