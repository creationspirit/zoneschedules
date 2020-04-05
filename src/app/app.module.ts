import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoneOverviewComponent } from './components/zone-overview/zone-overview.component';
import { ScheduleEditComponent } from './components/schedule-edit/schedule-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoneOverviewComponent,
    ScheduleEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
