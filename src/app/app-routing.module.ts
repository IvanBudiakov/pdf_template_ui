import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component'; 
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/details/edit/edit.component';
import { AddTemplateComponent } from './components/add-template/add-template.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'templates/details/:id', component : DetailsComponent},
  { path: 'templates/details/:id/edit', component : EditComponent},
  { path: 'templates/add-new-template', component : AddTemplateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
