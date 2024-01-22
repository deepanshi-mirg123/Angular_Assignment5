import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDashboardComponent } from './components/display-dashboard/display-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { authGaurd, resolve } from '../../gaurds/auth.guard';
import { LensComponent } from './components/lens/lens.component';
import { LensesComponent } from './components/lens/lenses/lenses.component';


const routes: Routes = [
  {path: '', component: DisplayDashboardComponent,
  children:[
    {path: 'home',component: HomeComponent},
    {path: 'about', component :AboutComponent},
    {path: 'lens', component: LensComponent, resolve: { lenses: resolve }},
    { path: 'lenses/:id', component: LensesComponent},
    {path: 'contact', component: ContactComponent, canActivate: [authGaurd]},
    {path: '', redirectTo: '/display/home' ,pathMatch: 'full'}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayRoutingModule { }
