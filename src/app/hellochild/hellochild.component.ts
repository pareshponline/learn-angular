import { Component, Input } from '@angular/core';

@Component({
  selector: 'hellochild',
  templateUrl: './hellochild.component.html',
  styleUrls: ['./hellochild.component.css']
})
export class HellochildComponent {
  @Input() users: any;

  constructor() {}
}
