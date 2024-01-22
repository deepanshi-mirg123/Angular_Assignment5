import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayRoutingModule } from './display-routing.module';
import { DisplayDashboardComponent } from './components/display-dashboard/display-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LensComponent } from './components/lens/lens.component';
import { LensService } from '../../services/lens.service';
import { LensesComponent } from './components/lens/lenses/lenses.component';


@NgModule({
  declarations: [
    DisplayDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LensComponent,
    LensesComponent,
  
   
  ],

  imports: [
    CommonModule,
    DisplayRoutingModule
  ],
  providers: [LensService],
})
export class DisplayModule { }
