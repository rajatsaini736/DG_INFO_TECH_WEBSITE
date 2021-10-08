import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { Blog1Component } from './components/blog1/blog1.component';
import { Blog2Component } from './components/blog2/blog2.component';
import { Blog3Component } from './components/blog3/blog3.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ServiceComponent } from './components/service/service.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'contact-us', component: ContactUsComponent },
  // { path: 'about-us', component: AboutUsComponent },
  // { path: 'services', component: ServiceComponent },
  // { path: 'career', component: CareersComponent },
  // { path: 'privacy-policy', component: PrivacyPolicyComponent },
  // { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  // { path: 'blog-1', component: Blog1Component },
  // { path: 'blog-2', component: Blog2Component },
  // { path: 'blog-3', component: Blog3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
