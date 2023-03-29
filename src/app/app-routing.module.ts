import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChefsRecommendedComponent} from "./chefs-components/chefs-recommended/chefs-recommended.component";
import {MenuComponent} from "./menu/menu.component";
import {ContactComponent} from "./contact/contact.component";
import {OurMissionComponent} from "./our-mission/our-mission.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'our-mission', component: OurMissionComponent},
  {path: 'chefs-recommended', component: ChefsRecommendedComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
