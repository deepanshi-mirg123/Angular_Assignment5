import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDashboardComponent } from './components/display-dashboard/display-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { authGaurd } from '../../gaurds/auth.guard';


const routes: Routes = [
  {path: '', component: DisplayDashboardComponent,
  children:[
    {path: 'home',component: HomeComponent},
    {path: 'about', component :AboutComponent},
    {path: 'services', component: ServicesComponent},
  
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
