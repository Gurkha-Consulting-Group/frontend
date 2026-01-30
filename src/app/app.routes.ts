import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookOnlineComponent } from './book-online/book-online.component';
import { ViewContactRequestComponent } from './view-contact-request/view-contact-request.component';

export const routes: Routes = [
  { path:"home", component:HomeComponent},
  { path:"", redirectTo: '/home', pathMatch: 'full'},
  { path:"contact-us", component:ContactUsComponent},
  { path:"book-online", component:BookOnlineComponent},
  {path:"view-contact-request", component:ViewContactRequestComponent}
];
