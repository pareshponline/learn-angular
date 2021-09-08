import { Component, OnInit, VERSION } from '@angular/core';
import { MyapiService } from './myapi.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  users: any;
  users1: any;
  constructor(private api: MyapiService) {}

  ngOnInit() {
    this.api.fetchData('users?page=1').subscribe(res => {
      this.users = JSON.stringify(res);
      this.users1 = res;
      console.log('data response', this.users);
    });
  }
}
