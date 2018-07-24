import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxDhis2ChartModule } from 'projects/ngx-dhis2-chart/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgxDhis2ChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
