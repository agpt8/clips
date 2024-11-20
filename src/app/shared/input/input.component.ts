import { Component, OnInit, input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  readonly control = input<UntypedFormControl>(new UntypedFormControl());
  readonly type = input('text');
  readonly placeholder = input('');
  readonly format = input('');

  constructor() {}

  ngOnInit(): void {}
}
