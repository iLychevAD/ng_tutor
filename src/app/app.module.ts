import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './h';
import { HeroDetailComponent } from './hero-detail.component';

import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './msg.component';
import { MessageService } from './msg.service';
import { HeroService } from './hero.service';

import { AppRoutingModule }     from './app-routing.module';
import { p404Component }     from './404';

import { DashboardComponent }   from './dash.component';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule, HttpClientModule,
                  HttpClientInMemoryWebApiModule.forRoot(
                  InMemoryDataService, { dataEncapsulation: false }
                ) ],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, p404Component, HeroSearchComponent ],
  providers:    [ HeroService, MessageService, InMemoryDataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
