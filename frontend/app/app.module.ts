import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { HttpModule }          from '@angular/http';

import { AppRoutingModule }    from './app-routing.module';
import { AppComponent }        from './app.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroesComponent }     from './hero/heroes.component';
import { HeroSearchComponent } from './hero/hero-search.component';
import { HeroService }         from './hero/hero.service';

import './rxjs-extensions';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
