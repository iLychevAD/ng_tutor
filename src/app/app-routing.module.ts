import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './h';
import { p404Component }      from './404';
import { DashboardComponent }   from './dash.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
        { path: '', redirectTo: '/dash', pathMatch: 'full' },
        { path: 'heroes', component: HeroesComponent },
        { path: 'detail/:id', component: HeroDetailComponent },
        { path: 'dash', component: DashboardComponent },
        {path: '404', component: p404Component},
        {path: '**', redirectTo: '/404'}
        
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ DashboardComponent ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 
    
}
