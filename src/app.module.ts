import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ApiKeyInterceptor } from './app/Interceptors/api-key.interceptor';
import { FootballService } from './app/services/football.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, MatButtonModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [
    FootballService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
