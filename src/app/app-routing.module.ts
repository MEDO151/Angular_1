import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PORTFOLIComponent } from './portfoli/portfoli.component';
import { CotactComponent } from './cotact/cotact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch: "full",},
  {path:"home" , component:HomeComponent , title: "Home"},
  {path:"about" , component:AboutComponent , title: "About"},
  {path:"portfolio" , component:PORTFOLIComponent , title: "portfolio"},
  {path:"contact" , component:CotactComponent , title: "contact"},
  {path:"**" , component:NotFoundComponent , title: "EROR 404"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
