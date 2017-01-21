import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms'

import { AppComponent }        from './app.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroesComponent }     from './hero/heroes.component';
import { HeroService }         from './hero/hero.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: DashboardComponent
    }, {
      path: 'heroes',
      component: HeroesComponent
    }, {
      path: 'detail/:id',
      component: HeroDetailComponent
    }])
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
