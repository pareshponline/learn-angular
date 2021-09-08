import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>

    <h1>Hello {{ users }}!</h1>

    <hellochild users="{{ users1 }}"></hellochild>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  @Input() users: any;
  @Input() users1: any;
}
