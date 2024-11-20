import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit {
  readonly tabTitle = input('');
  readonly active = input(false);
  constructor() {}

  ngOnInit(): void {}
}
