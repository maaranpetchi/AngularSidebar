import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavbarComponent } from './SideNavbar/side-navbar/side-navbar.component';

const routes: Routes = [
  { path: '',   redirectTo: '/sidenavbar', pathMatch: 'full' },
  { path: 'sidenavbar', component: SideNavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
