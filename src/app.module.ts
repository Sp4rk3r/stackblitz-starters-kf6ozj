import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FootballService } from './app/services/football.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, MatButtonModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [FootballService],
})
export class AppModule {}
