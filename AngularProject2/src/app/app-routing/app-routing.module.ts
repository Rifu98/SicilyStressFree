import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../home/HomeComponent.1';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { PolicyComponent } from '../policy/policy.component';
import { CaseService } from '../case.service';
import { CasaComponent } from '../casa/casa.component';

const routes: Routes = [
  {
    path: '', title: "Lydia's Villas, Apartments, Tours - Home", component: HomeComponent },
  { path: 'about', title: "Lydia's Villas, Apartments, Tours - About", component: AboutComponent },
  { path: 'contact', title: "Lydia's Villas, Apartments, Tours - Contact", component: ContactComponent },
  { path: 'policy', title: "Lydia's Villas, Apartments, Tours - Privacy Policy", component: PolicyComponent },
  { path: 'villa/:id', title: "Lydia's Villas, Apartments, Tours - Villa", component: CasaComponent },
  { path: 'apartment/:id', title: "Lydia's Villas, Apartments, Tours - Apartment", component: CasaComponent },
  { path: 'tour/:id', title: "Lydia's Villas, Apartments, Tours - Tours", component: CasaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private Case: CaseService) { }

}
