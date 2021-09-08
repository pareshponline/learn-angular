import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyapiService } from './myapi.service';
import { HelloComponent } from './hello.component';
import { HellochildComponent } from './hellochild/hellochild.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, HellochildComponent],
  bootstrap: [AppComponent],
  providers: [HttpClient, MyapiService]
})
export class AppModule {}
